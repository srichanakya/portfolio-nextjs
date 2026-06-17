export const metadata = {
  title: "Sri Chanakya Yennana | Software Engineer",
  description: "Software Developer Analyst at Goldman Sachs. High-performance backend systems, payment infrastructure, and distributed architecture.",
};

const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: #000; color: #f5f5f7;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased; overflow-x: hidden;
  }
  ::selection { background: rgba(41,151,255,0.3); color: #f5f5f7; }
  .section-eyebrow {
    display: inline-block; font-size: 11px; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase; color: #2997ff;
    margin-bottom: 16px; padding: 6px 14px;
    background: rgba(41,151,255,0.1); border: 1px solid rgba(41,151,255,0.2);
    border-radius: 980px;
  }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: #000; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 3px; }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head><style dangerouslySetInnerHTML={{ __html: globalStyles }} /></head>
      <body>{children}</body>
    </html>
  );
}
