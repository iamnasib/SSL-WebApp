export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            questionnaire_responses: {
                Row: {
                    id: string
                    name: string
                    company_name: string | null
                    email: string
                    phone: string | null
                    project_types: string[] | null
                    project_description: string | null
                    main_goals: string[] | null
                    main_goals_other: string | null
                    stage: string | null
                    budget_range: string | null
                    timeline: string | null
                    features: string[] | null
                    features_other: string | null
                    tech_preference: string | null
                    additional_info: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    company_name?: string | null
                    email: string
                    phone?: string | null
                    project_types?: string[] | null
                    project_description?: string | null
                    main_goals?: string[] | null
                    main_goals_other?: string | null
                    stage?: string | null
                    budget_range?: string | null
                    timeline?: string | null
                    features?: string[] | null
                    features_other?: string | null
                    tech_preference?: string | null
                    additional_info?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    company_name?: string | null
                    email?: string
                    phone?: string | null
                    project_types?: string[] | null
                    project_description?: string | null
                    main_goals?: string[] | null
                    main_goals_other?: string | null
                    stage?: string | null
                    budget_range?: string | null
                    timeline?: string | null
                    features?: string[] | null
                    features_other?: string | null
                    tech_preference?: string | null
                    additional_info?: string | null
                    created_at?: string
                }
            }
            contact_requests: {
                Row: {
                    id: string
                    name: string
                    email: string
                    preferred_time: string | null
                    message: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    email: string
                    preferred_time?: string | null
                    message?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    email?: string
                    preferred_time?: string | null
                    message?: string | null
                    created_at?: string
                }
            }
            portfolio_projects: {
                Row: {
                    id: string
                    title: string
                    description: string
                    image_url: string | null
                    tags: string[] | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    title: string
                    description: string
                    image_url?: string | null
                    tags?: string[] | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    title?: string
                    description?: string
                    image_url?: string | null
                    tags?: string[] | null
                    created_at?: string
                }
            }
            testimonials: {
                Row: {
                    id: string
                    name: string
                    role: string
                    company: string
                    avatar_url: string | null
                    quote: string
                    highlight_result: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    role: string
                    company: string
                    avatar_url?: string | null
                    quote: string
                    highlight_result?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    role?: string
                    company?: string
                    avatar_url?: string | null
                    quote?: string
                    highlight_result?: string | null
                    created_at?: string
                }
            }
            team_members: {
                Row: {
                    id: string
                    name: string
                    role: string
                    bio: string
                    avatar_url: string | null
                    created_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    role: string
                    bio: string
                    avatar_url?: string | null
                    created_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    role?: string
                    bio?: string
                    avatar_url?: string | null
                    created_at?: string
                }
            }
        }
    }
}
