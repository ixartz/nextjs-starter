const SimpleCenteredFooter = (props: { name: string }) => (
  <div className="text-center text-sm text-muted-foreground">
    © Copyright {new Date().getFullYear()} {props.name}
  </div>
);

export { SimpleCenteredFooter };
