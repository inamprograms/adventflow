import RequireAuth from "../../auth/RequireAuth";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  return <RequireAuth>{children}</RequireAuth>;
}
