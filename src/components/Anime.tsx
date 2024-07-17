import React, {
  Fragment,
  useRef,
  useCallback,
  useEffect,
  createRef,
} from 'react';
import animejs, { AnimeInstance } from 'animejs'; // Import animejs for animations

import { flatten } from 'src/utils/flatten'; // Utility function to flatten arrays
import { AnimeProps, Easing, AnimeValue, PREFIX } from '../types'; // Import types used in the component

/**
 * Component for managing animejs animations.
 *
 * @param props Props for configuring the Anime component.
 */
function Anime(props: AnimeProps) {
  const animes = useRef<AnimeInstance[]>([]); // Ref to store instances of ongoing anime animations
  const targets = useRef<Element[]>([]); // Ref to store elements targeted for animation
  const targetRefs = useRef<{ current: Element | null }[]>([]); // Ref to store references to elements
  const completed = useRef<Set<Element>>(new Set()); // Ref to store completed animation targets

  /**
   * Cleans up completed animations from the anime stack and references.
   */
  const cleanupAnimeStack = () => {
    for (let ani of animes.current) {
      if (ani.completed)
        animes.current = animes.current.filter((a) => a != ani); // Remove completed animations
    }
    targets.current = targets.current.filter(
      (t) => t != undefined && t != null, // Filter out undefined or null targets
    );
    targetRefs.current = targetRefs.current.filter(
      (t) => t && t.current != null, // Filter out null or undefined references
    );
  };

  /**
   * Cycles through animations based on props changes.
   *
   * @param props Props for configuring the Anime component.
   */
  const cycleAnime = (props: any) => {
    cleanupAnimeStack(); // Clean up any completed animations

    if (targets.current.length > 0) animejs.remove(targets); // Remove any existing targets from animejs
    targets.current = [];

    // Add new target references that haven't completed to the targets list
    for (let ref of targetRefs.current) {
      if (ref.current && !completed.current.has(ref.current))
        targets.current.push(ref.current);
    }

    /**
     * Complete callback function for each anime instance.
     *
     * @param ani The animejs instance that completed.
     */
    const complete = (ani: AnimeInstance) => {
      if (props.complete) props.complete(ani); // Call complete callback from props, if provided
      ani.animatables.map((a: any) => completed.current.add(a.target)); // Add completed animation targets to the completed set
      cleanupAnimeStack(); // Clean up completed animations from the stack
    };

    // Configure animation props for animejs
    const animeProps: any = {
      ...props,
      targets: targets.current, // Set animation targets
      complete, // Set complete callback
    };
    delete animeProps.children; // Remove children prop from animeProps
    animes.current.push(animejs(animeProps)); // Create and store a new animejs animation instance
  };

  /**
   * Memoized callback function to create animations.
   */
  const createAnime = useCallback(() => {
    cycleAnime(props); // Call cycleAnime whenever props change
  }, [props]);

  // Effect hook to create animations on component mount and when props change
  useEffect(() => {
    createAnime();
  }, [createAnime]);

  const refs = targetRefs.current; // Get current references from targetRefs
  let children = Array.isArray(props.children) // Convert props.children into an array if it's not already one
    ? props.children
    : [props.children];
  children = flatten(children); // Flatten the children array using the flatten utility function

  // Render the component
  return (
    <Fragment>
      {children.map((child: any, i: number) => {
        refs.push(createRef()); // Create a new ref and push it to refs array
        const El = props.component ? props.component : 'div'; // Determine the component to render based on props or default to 'div'
        return (
          <El ref={refs[refs.length - 1]} key={`${PREFIX}${i}`}>
            {/* Render the component with ref and unique key */}
            {child} {/* Render the child element */}
          </El>
        );
      })}
    </Fragment>
  );
}

// Exporting types used in the component for external use
export type { AnimeProps, AnimeValue, AnimeInstance, Easing };
// Exporting animejs as anime for direct access
export { animejs as anime };
export default Anime;
