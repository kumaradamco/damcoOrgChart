// ErrorBoundary.tsx

import * as React from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps,ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return {hasError: true};
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error",error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-message">Something went wrong</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;