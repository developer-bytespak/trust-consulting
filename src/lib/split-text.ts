"use client";

export function splitTextIntoSpans(
  element: HTMLElement,
  type: "words" | "chars" = "words"
): HTMLSpanElement[] {
  const text = element.textContent || "";
  element.innerHTML = "";

  if (type === "words") {
    const words = text.split(/\s+/).filter(Boolean);
    return words.map((word, i) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.display = "inline-block";
      span.style.overflow = "hidden";
      element.appendChild(span);
      if (i < words.length - 1) {
        element.appendChild(document.createTextNode(" "));
      }
      return span;
    });
  }

  const chars = text.split("");
  return chars.map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });
}
