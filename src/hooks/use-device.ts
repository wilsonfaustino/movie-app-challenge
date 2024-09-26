import { useMediaQuery } from '@react-hookz/web'

/**
 * A custom React hook for detecting the device type based on screen width.
 *
 * @returns {Object} An object containing boolean values for isMobile and isDesktop.
 *
 * @example
 * // Usage
 * const { isMobile, isDesktop } = useDevice();
 *
 * // Conditionally render based on device type
 * if (isMobile) {
 *   return <MobileComponent />;
 * } else if (isDesktop) {
 *   return <DesktopComponent />;
 * }
 *
 * @description
 * This hook uses the useMediaQuery hook from @react-hookz/web to determine
 * whether the current device is mobile or desktop based on screen width.
 *
 * - isMobile: true if the screen width is 1023px or less
 * - isDesktop: true if the screen width is 1024px or more
 *
 * The initializeWithValue option is set to false to prevent hydration mismatches
 * when using server-side rendering.
 *
 * Note: This hook considers tablets as mobile devices.
 */
export function useDevice() {
  const isMobile = useMediaQuery('(max-width: 1023px)', { initializeWithValue: false })
  const isDesktop = useMediaQuery('(min-width: 1024px)', { initializeWithValue: false })

  return { isMobile, isDesktop }
}
