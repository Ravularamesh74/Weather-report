import {
  NavLink as RouterNavLink,
  NavLinkProps,
} from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  disabled?: boolean;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName = "text-primary font-semibold",
      pendingClassName = "opacity-70",
      disabled = false,
      to,
      ...props
    },
    ref
  ) => {

    if (disabled) {
      const resolvedChildren =
        typeof props.children === "function"
          ? props.children({
              isActive: false,
              isPending: false,
              isTransitioning: false,
            })
          : props.children;

      return (
        <span
          ref={ref as any}
          className={cn(
            "pointer-events-none opacity-50 cursor-not-allowed",
            className
          )}
        >
          {resolvedChildren}
        </span>
      );
    }

    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            "transition-colors",
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };