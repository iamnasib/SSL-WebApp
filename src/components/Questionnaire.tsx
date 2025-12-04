import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, AlertCircle } from 'lucide-react';
import { questionnaireSchema, type QuestionnaireData } from '../lib/schemas';
import { supabase } from '../lib/supabase';
import { Button } from './Button';
import { Card } from './Card';

const steps = [
    { id: 1, title: 'Basic Info' },
    { id: 2, title: 'Project Details' },
    { id: 3, title: 'Budget & Timeline' },
    { id: 4, title: 'Features & Tech' },
];

export const Questionnaire = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<QuestionnaireData>({
        resolver: zodResolver(questionnaireSchema),
        defaultValues: {
            project_types: [],
            main_goals: [],
            features: [],
            stage: '',
            budget_range: '',
            timeline: '',
            tech_preference: '',
        },
    });

    const nextStep = async () => {
        let fieldsToValidate: (keyof QuestionnaireData)[] = [];

        if (currentStep === 1) fieldsToValidate = ['name', 'email'];
        if (currentStep === 2) fieldsToValidate = ['project_types', 'project_description', 'main_goals'];
        if (currentStep === 3) fieldsToValidate = ['stage', 'budget_range', 'timeline'];
        if (currentStep === 4) fieldsToValidate = ['tech_preference'];

        const isValid = await trigger(fieldsToValidate);
        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length + 1));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const onSubmit = async (data: QuestionnaireData) => {
        setIsSubmitting(true);
        setError(null);

        try {
            const { error: dbError } = await supabase
                .from('questionnaire_responses')
                .insert([data]);

            if (dbError) throw dbError;

            setIsSuccess(true);
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <Card className="max-w-2xl mx-auto text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">You're all set!</h2>
                <p className="text-text-secondary mb-8 text-lg">
                    Thanks! Based on your answers, we'll review and suggest the best approach for you.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href={import.meta.env.VITE_MEETING_URL} target="_blank" rel="noopener noreferrer">
                        <Button size="lg">Schedule a Meeting</Button>
                    </a>
                    <p className="text-sm text-text-muted">
                        Prefer email? <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="text-primary hover:underline">Reach us here</a>
                    </p>
                </div>
            </Card>
        );
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className={`text-sm font-medium ${step.id <= currentStep ? 'text-primary-light' : 'text-text-muted'
                                }`}
                        >
                            Step {step.id}
                        </div>
                    ))}
                </div>
                <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Basic Info</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary">Your Name *</label>
                                        <input
                                            {...register('name')}
                                            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary">Company Name</label>
                                        <input
                                            {...register('company_name')}
                                            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="Acme Inc."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary">Email *</label>
                                        <input
                                            {...register('email')}
                                            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-text-secondary">Phone / WhatsApp</label>
                                        <input
                                            {...register('phone')}
                                            className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="+1 234 567 890"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">About your project</h2>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">What do you want to build? *</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['Web App', 'Mobile App', 'Landing Page', 'Internal Tool', 'Automation', 'Not sure yet'].map((type) => (
                                            <label key={type} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="checkbox"
                                                    value={type}
                                                    {...register('project_types')}
                                                    className="w-4 h-4 text-primary rounded border-gray-500 focus:ring-primary"
                                                />
                                                <span className="text-white">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.project_types && <span className="text-red-500 text-sm">{errors.project_types.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary">Describe your idea in 2-3 sentences *</label>
                                    <textarea
                                        {...register('project_description')}
                                        rows={4}
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="We want to build a platform for..."
                                    />
                                    {errors.project_description && <span className="text-red-500 text-sm">{errors.project_description.message}</span>}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">Main Goal *</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['Validate Idea / MVP', 'Improve Existing Product', 'Automate Process', 'Redesign / Rebuild'].map((goal) => (
                                            <label key={goal} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="checkbox"
                                                    value={goal}
                                                    {...register('main_goals')}
                                                    className="w-4 h-4 text-primary rounded border-gray-500 focus:ring-primary"
                                                />
                                                <span className="text-white">{goal}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.main_goals && <span className="text-red-500 text-sm">{errors.main_goals.message}</span>}
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Stage, Budget & Timeline</h2>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">What stage are you at? *</label>
                                    <div className="space-y-2">
                                        {['Just an idea', 'Designs / Wireframes ready', 'Existing product needs improvement'].map((option) => (
                                            <label key={option} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="radio"
                                                    value={option}
                                                    {...register('stage')}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-white">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.stage && <span className="text-red-500 text-sm">{errors.stage.message}</span>}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">Rough Budget Range *</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['<$2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000+', 'Prefer not to say'].map((range) => (
                                            <label key={range} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="radio"
                                                    value={range}
                                                    {...register('budget_range')}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-white">{range}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.budget_range && <span className="text-red-500 text-sm">{errors.budget_range.message}</span>}
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">How quickly do you want to launch? *</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['ASAP (1-4 weeks)', '1-3 months', '3-6 months', 'Flexible'].map((time) => (
                                            <label key={time} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="radio"
                                                    value={time}
                                                    {...register('timeline')}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-white">{time}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.timeline && <span className="text-red-500 text-sm">{errors.timeline.message}</span>}
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="text-2xl font-bold text-white">Features & Tech</h2>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">Which features do you need?</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {['User Accounts', 'Payments', 'Admin Dashboard', 'API Integrations', 'Forms', 'File Uploads', 'Email/SMS', 'Other'].map((feature) => (
                                            <label key={feature} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="checkbox"
                                                    value={feature}
                                                    {...register('features')}
                                                    className="w-4 h-4 text-primary rounded border-gray-500 focus:ring-primary"
                                                />
                                                <span className="text-white">{feature}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-text-secondary">Technology Preference *</label>
                                    <div className="space-y-2">
                                        {[
                                            { val: 'Low-code/No-code', label: 'Open to Low-code/No-code (Save time & money)' },
                                            { val: 'Custom Code', label: 'Prefer Custom Code for everything' },
                                            { val: 'Best Fit', label: 'I don\'t know / I want the best fit' }
                                        ].map((pref) => (
                                            <label key={pref.val} className="flex items-center space-x-3 p-3 rounded-lg border border-white/10 hover:bg-white/5 cursor-pointer transition-colors">
                                                <input
                                                    type="radio"
                                                    value={pref.val}
                                                    {...register('tech_preference')}
                                                    className="w-4 h-4 text-primary focus:ring-primary"
                                                />
                                                <span className="text-white">{pref.label}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.tech_preference && <span className="text-red-500 text-sm">{errors.tech_preference.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary">Anything else we should know?</label>
                                    <textarea
                                        {...register('additional_info')}
                                        rows={3}
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="Any specific requirements or questions..."
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {error && (
                        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-500">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            {error}
                        </div>
                    )}

                    <div className="mt-8 flex justify-between pt-6 border-t border-white/10">
                        {currentStep > 1 ? (
                            <Button type="button" variant="ghost" onClick={prevStep}>
                                <ChevronLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                        ) : (
                            <div></div>
                        )}

                        {currentStep < 4 ? (
                            <Button type="button" onClick={nextStep}>
                                Next <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button type="submit" isLoading={isSubmitting}>
                                Submit Project
                            </Button>
                        )}
                    </div>
                </form>
            </Card>
        </div>
    );
};
