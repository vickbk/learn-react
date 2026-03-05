import React from "react";

export const CategoryHolder = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <section className="p-4">
      <h4 className="text-lg font-semibold mb-4">{title}</h4>
      {children}
    </section>
  );
};
