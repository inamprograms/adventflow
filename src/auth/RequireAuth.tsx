import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/ui/Loader";

export default function RequireAuth({ children }: { children: any }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/login");
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading…</p>;
  if (loading) return <Loader text="Checking session…" />;

  return children;
}
