import { JSX } from "react";

interface Props {
  error: Error;
  resetErrorBoundary: () => void;
}

/**
 * FallbackComponent is the component that is rendered when an error occurs.
 * @param {Props} props - Props passed to the component.
 * @param {Error} props.error - The error that occurred.
 * @param {Function} props.resetErrorBoundary - A function that resets the error boundary.
 * @returns {JSX.Element} - The rendered component.
 */
export function FallbackComponent({
  error,
  resetErrorBoundary,
}: Props): JSX.Element {
  return (
    <div role='alert'>
      <h1>Something went wrong</h1>
      <pre>
        <h4>{error.message}</h4>
      </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
