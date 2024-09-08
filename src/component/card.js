// components/ui/Card.js
import React from "react";

export const Card = ({ children, className }) => (
  <div
    className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden ${className}`}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
);

export const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

export const CardDescription = ({ children, className }) => (
  <p className={`text-gray-400 ${className}`}>{children}</p>
);

export const CardFooter = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
