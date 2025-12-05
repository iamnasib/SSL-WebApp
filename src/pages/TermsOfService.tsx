import { motion } from 'framer-motion';

export const TermsOfService = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>

                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <p className="mb-6">
                            Welcome to Sprint Stack Labs. By accessing or using our website, submitting project inquiries, or engaging in our services, you agree to these Terms of Service (“Terms”). Please read them carefully.
                        </p>
                        <p className="mb-8">
                            If you do not agree with any part of these Terms, you may not use our site or services.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Overview of Services</h2>
                            <p className="mb-4">Sprint Stack Labs provides digital services including, but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Web application development</li>
                                <li>Mobile app development</li>
                                <li>Automation solutions</li>
                                <li>No-code and low-code builds</li>
                                <li>Custom software development</li>
                                <li>Consultation and tech stack advisory</li>
                            </ul>
                            <p className="mt-4">
                                Our philosophy is rooted in delivering high-quality digital products using the most appropriate and efficient technology based on the unique needs of each project.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">2. Use of Website and Content</h2>
                            <p className="mb-4">
                                All materials on this website - including text, branding, design, and intellectual property - are owned by Sprint Stack Labs or licensed third parties. Users may not copy, redistribute, sell, republish, or modify any content without written permission.
                            </p>
                            <p className="mb-4">You agree not to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Use the site for unlawful purposes</li>
                                <li>Attempt to gain unauthorized access to systems or data</li>
                                <li>Upload malicious code (malware, scripts, bots, etc.)</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Project Inquiries and Communication</h2>
                            <p className="mb-4">
                                By submitting a form, scheduling a consultation, or requesting a proposal, you agree to allow Sprint Stack Labs to contact you using the details provided.
                            </p>
                            <p className="mb-4">
                                While filling out project questionnaire forms, you agree to provide accurate and truthful information to help us evaluate your project.
                            </p>
                            <p>
                                Submitting a form does not constitute a binding contract until both parties formally agree in writing.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Quotes, Pricing, and Payments</h2>
                            <p className="mb-4">
                                Any proposals, estimates, or quoted timelines are based on the information provided at the time of inquiry and may change if:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Project scope evolves</li>
                                <li>New features are requested</li>
                                <li>Technical requirements change</li>
                                <li>Third-party services or tools introduce pricing changes</li>
                            </ul>
                            <p className="mt-4">
                                Final terms, deliverables, timelines, and payment schedules will be outlined in a project-specific contract or agreement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property Rights</h2>
                            <p className="mb-4">Unless otherwise agreed in writing:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Sprint Stack Labs retains ownership of development tools, frameworks, internal libraries, and reusable components.</li>
                                <li>The client owns the finalized product deliverables upon full payment, including source files when included in the agreement.</li>
                                <li>Some solutions may include third-party licenses or tools, which remain governed by their respective licensing terms.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Client Responsibilities</h2>
                            <p className="mb-4">To enable effective delivery, you agree to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide timely feedback and required content</li>
                                <li>Approve milestones in a reasonable timeframe</li>
                                <li>Ensure any provided assets (logos, text, branding, etc.) do not violate third-party rights</li>
                            </ul>
                            <p className="mt-4">
                                Delays in approvals or communication may impact delivery timelines.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Revisions and Scope Changes</h2>
                            <p className="mb-4">
                                Revisions are included based on the agreed project contract. Requests beyond the original scope may result in additional cost and adjusted timelines.
                            </p>
                            <p>
                                No work outside the agreed scope will be executed without mutual written approval.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Third-Party Services and Integrations</h2>
                            <p className="mb-4">
                                Some projects may rely on external tools, APIs, hosting platforms, or licenses. Sprint Stack Labs is not responsible for:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Third-party policy or pricing changes</li>
                                <li>Downtime or technical failure of external services</li>
                                <li>Losses resulting from third-party integrations outside our control</li>
                            </ul>
                            <p className="mt-4">
                                Clients are responsible for maintaining their own paid subscriptions unless otherwise stated in the contract.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Warranty and Limitations</h2>
                            <p className="mb-4">
                                We strive to deliver high-quality, functional solutions. However, we do not guarantee:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Continuous website uptime</li>
                                <li>Permanent compatibility with future operating systems or browsers</li>
                                <li>Performance affected by actions outside our development environment</li>
                            </ul>
                            <p className="mt-4">
                                Bug fixes related to original scope may be included for a limited warranty period defined in the project agreement.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
                            <p className="mb-4">Either party may terminate a project if the other party:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Violates these Terms</li>
                                <li>Fails to provide required communication or payment</li>
                                <li>Acts in a way that disrupts collaboration</li>
                            </ul>
                            <p className="mt-4">
                                Upon termination, the client must pay for completed work up to the date of cancellation.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">11. Liability</h2>
                            <p className="mb-4">To the maximum extent permitted by law, Sprint Stack Labs is not liable for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Loss of data</li>
                                <li>Business interruption</li>
                                <li>Lost profits or indirect damages</li>
                                <li>Third-party service failures</li>
                            </ul>
                            <p className="mt-4">
                                Our total liability is limited to the amount paid for services rendered.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">12. Governing Law</h2>
                            <p>
                                These Terms are governed by applicable laws based on Sprint Stack Labs' registered jurisdiction, regardless of conflict-of-law principles.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">13. Updates to Terms</h2>
                            <p>
                                We may update these Terms at any time. Continued use of our website or services constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Information</h2>
                            <p>
                                If you have questions regarding these Terms, you may contact us at:
                                <br />
                                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="text-primary hover:text-primary-light transition-colors">{import.meta.env.VITE_CONTACT_EMAIL}</a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
