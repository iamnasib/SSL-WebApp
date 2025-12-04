import { z } from 'zod';

export const questionnaireSchema = z.object({
    // Step 1: Basic Info
    name: z.string().min(2, 'Name is required'),
    company_name: z.string().optional(),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),

    // Step 2: Project Details
    project_types: z.array(z.string()).min(1, 'Select at least one project type'),
    project_description: z.string().min(10, 'Please provide a brief description'),
    main_goals: z.array(z.string()).min(1, 'Select at least one goal'),
    main_goals_other: z.string().optional(),

    // Step 3: Stage, Budget & Timeline
    stage: z.string().min(1, 'Please select a stage'),
    budget_range: z.string().min(1, 'Please select a budget range'),
    timeline: z.string().min(1, 'Please select a timeline'),

    // Step 4: Features & Tech
    features: z.array(z.string()).optional(),
    features_other: z.string().optional(),
    tech_preference: z.string().min(1, 'Please select a preference'),
    additional_info: z.string().optional(),
});

export type QuestionnaireData = z.infer<typeof questionnaireSchema>;

export const contactSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message is too short'),
});

export type ContactData = z.infer<typeof contactSchema>;
