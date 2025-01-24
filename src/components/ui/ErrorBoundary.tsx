import { Danger, Refresh } from "iconsax-react";
import React, { Component, ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  resetError = () => {
    window.location.reload();
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI if provided, otherwise a default one
      return (
        this.props.fallback || (
          <div
            className="w-full h-screen flex flex-col justify-center items-center"
            onClick={this.resetError}
          >
            <div className="flex justify-center items-center">
              <Danger size="32" className="text-amber-600" />
              <span className="text-lg mr-4">
                مشکلی پیش آمده است. لطفا دوباره امتحان کنید.
              </span>
            </div>
            <button className="btn btn-lg mt-6">
              <Refresh size="24" color="white" />
              <span>بارگزاری مجدد</span>
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
