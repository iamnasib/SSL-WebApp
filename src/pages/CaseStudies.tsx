import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

export const CaseStudies = () => {
    const [projects, setProjects] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const { data } = await supabase
                .from('portfolio_projects')
                .select('*')
                .order('created_at', { ascending: false });

            if (data) setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Recent Work
                </h1>
                <p className="text-xl text-text-secondary">
                    See how we've helped other founders and businesses ship faster.
                </p>
            </div>

            {loading ? (
                <div className="flex justify-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : (
                <>
                    {projects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projects.map((project) => (
                                <Card key={project.id} className="p-0 overflow-hidden group">
                                    <div className="p-8">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags?.map((tag: string) => (
                                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-primary-light border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                        <p className="text-text-secondary">
                                            {project.description}
                                        </p>
                                        {project.project_url && (
                                            <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all mt-4">
                                                <a href={project.project_url} target="_blank" rel="noopener noreferrer" className="flex items-center">View Details <ExternalLink className="w-4 h-4 ml-2" /></a>
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-surface/30 rounded-2xl border border-white/5">
                            <p className="text-text-secondary mb-6">No case studies published yet.</p>
                            <Link to="/start">
                                <Button>Be our next success story</Button>
                            </Link>
                        </div>
                    )}

                    <div className="mt-20 border-t border-white/5 pt-16">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Constantly Shipping
                            </h2>
                            <p className="text-text-secondary max-w-2xl mx-auto">
                                Beyond the highlighted case studies, we are continuously working on new initiatives and helping clients scale.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-3">Diverse Engagements</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Executed over a dozen client engagements ranging from end-to-end feature builds and UI modernizations to critical performance tuning and optimization.
                                </p>
                            </div>
                            <div className="bg-surface/30 p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-3">Rapid Solutions</h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Delivered rapid turnaround for complex debugging requests, ensuring system stability and seamless API integrations for outsourced tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
