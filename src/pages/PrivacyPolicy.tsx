import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>

                        <p className="mb-6">
                            Sprint Stack Labs (“we,” “our,” “us”) is committed to protecting your privacy and ensuring transparency in how we collect, use, store, and safeguard your personal information.
                        </p>
                        <p className="mb-6">
                            We specialize in building software solutions — including web applications, mobile apps, automations, no-code and code-based systems — with a core mission to:
                        </p>
                        <p className="text-xl font-semibold text-white mb-6 italic">
                            Build smarter. Ship faster. Spend less.
                        </p>
                        <p className="mb-8">
                            This Privacy Policy explains how we collect and use your data when you interact with our website, contact us, or submit information regarding a project.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                            <h3 className="text-xl font-medium text-white mb-2">Information You Provide</h3>
                            <p className="mb-4">
                                When you fill out a form on our website (such as a contact form or project questionnaire), you may provide:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Full name</li>
                                <li>Email address</li>
                                <li>Phone number (if applicable)</li>
                                <li>Company or brand name</li>
                                <li>Details about your project</li>
                                <li>Additional information voluntarily provided</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                            <p className="mb-4">We use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to inquiries and follow up regarding your project</li>
                                <li>Recommend the best technology stack or solution</li>
                                <li>Schedule consultations or meetings</li>
                                <li>Provide estimates, proposals, or project-related communication</li>
                                <li>Improve website functionality and user experience</li>
                                <li>Send updates, resources, or service announcements (only with consent)</li>
                            </ul>
                            <p className="mt-4">
                                We do not sell or share your personal data with third parties for marketing purposes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">3. Legal Basis for Processing</h2>
                            <p className="mb-4">We process your data under the following legal bases (depending on jurisdiction):</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Consent</strong> - when you submit forms voluntarily</li>
                                <li><strong>Legitimate business interest</strong> - to communicate with potential clients</li>
                                <li><strong>Contractual necessity</strong> - when entering a project or service agreement</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">4. Data Sharing and Third-Party Services</h2>
                            <p className="mb-4">
                                We may share limited information with trusted third-party providers only when necessary, such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Web hosting platforms</li>
                                <li>CRM or scheduling tools</li>
                                <li>Email delivery systems</li>
                                <li>Analytics services (e.g., Google Analytics)</li>
                            </ul>
                            <p className="mt-4">
                                All partners are required to comply with privacy protection standards and do not have permission to use your data for their own purposes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
                            <p className="mb-4">We retain your information:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>For as long as needed to communicate or potentially work together</li>
                                <li>As required by law or operational needs</li>
                                <li>Until you request deletion</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
                            <p className="mb-4">Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access the personal data we hold</li>
                                <li>Request corrections or updates</li>
                                <li>Request deletion of your personal data</li>
                                <li>Withdraw consent at any time</li>
                                <li>Request a copy of your stored data</li>
                            </ul>
                            <p className="mt-4">
                                To request these actions, email us at: <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`} className="text-primary hover:text-primary-light transition-colors">{import.meta.env.VITE_CONTACT_EMAIL}</a>
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">7. Data Security</h2>
                            <p className="mb-4">
                                We implement reasonable administrative, technical, and physical safeguards to protect your information from loss, misuse, or unauthorized access.
                            </p>
                            <p>
                                However, no digital transmission is 100% secure, and we encourage users to protect their own devices and access credentials.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">8. Updates to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Us</h2>
                            <p>
                                If you have questions about this Privacy Policy or how your data is handled, you can contact us at:
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
