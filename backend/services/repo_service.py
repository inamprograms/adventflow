# Loads selected repo + token from DB: backend/services/repo_service.py

from supabase import create_client
from core.config import settings

supabase = create_client(settings.SUPABASE_URL, settings.SUPABASE_ANON_KEY)

class RepoService:

    @staticmethod
    def get_user_repo(user_id: str):
      
        resp = supabase.table("profiles") \
            .select("selected_repo, github_username, github_token") \
            .eq("id", user_id) \
            .single() \
            .execute()
        return resp.data
