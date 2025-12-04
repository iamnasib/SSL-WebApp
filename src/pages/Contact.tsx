import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactData } from '../lib/schemas';
import { supabase } from '../lib/supabase';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactData) => {
        setIsSubmitting(true);
        setError(null);
        try {
            const { error: dbError } = await supabase
                .from('contact_requests')
                .insert([data]);

            if (dbError) throw dbError;

            setIsSuccess(true);
            reset();
        } catch (err: any) {
            console.error('Error submitting contact form:', err);
            setError(err.message || 'Failed to send message.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in touch</h1>
                    <p className="text-xl text-text-secondary">
                        Have a question? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                    <p className="text-text-secondary">hello@sprintstacklabs.com</p>
                                    <p className="text-text-muted text-sm mt-1">We usually reply within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                    <p className="text-text-secondary">+1 (555) 123-4567</p>
                                    <p className="text-text-muted text-sm mt-1">Mon-Fri from 9am to 6pm EST.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Office</h3>
                                    <p className="text-text-secondary">
                                        123 Innovation Drive<br />
                                        Tech City, TC 90210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="p-8">
                        {isSuccess ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                <p className="text-text-secondary mb-8">
                                    Thanks for reaching out. We'll get back to you shortly.
                                </p>
                                <Button onClick={() => setIsSuccess(false)} variant="outline">
                                    Send another message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary">Name</label>
                                    <input
                                        {...register('name')}
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary">Email</label>
                                    <input
                                        {...register('email')}
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="you@company.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-text-secondary">Message</label>
                                    <textarea
                                        {...register('message')}
                                        rows={5}
                                        className="w-full bg-background/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                        placeholder="How can we help you?"
                                    />
                                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                                </div>

                                {error && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center text-red-500 text-sm">
                                        <AlertCircle className="w-4 h-4 mr-2" />
                                        {error}
                                    </div>
                                )}

                                <Button type="submit" className="w-full" isLoading={isSubmitting}>
                                    Send Message
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
};
