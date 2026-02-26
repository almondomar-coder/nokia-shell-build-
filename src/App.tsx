import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { HardHat, Building2, Ruler, ArrowRight, ChevronDown, Mail, Phone, MapPin, CheckCircle2, ArrowUpRight } from 'lucide-react';

function App() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

    const projects = [
        {
            title: "Onyx Skyscraper",
            category: "Commercial",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Meridian Transit Hub",
            category: "Civil Engineering",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Lumina Residences",
            category: "Luxury Residential",
            image: "/assets/images/project1.jpg"
        },
        {
            title: "Edward Street Paving",
            category: "Civil Engineering",
            image: "/assets/images/project2.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-noka-dark overflow-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-x-0 border-t-0 rounded-none bg-black/60">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Building2 className="w-8 h-8 text-noka-gold" />
                        <span className="text-2xl font-black tracking-widest uppercase">Noka</span>
                    </div>
                    <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wide text-gray-300">
                        <a href="#about" className="hover:text-noka-gold transition-colors">ABOUT</a>
                        <a href="#services" className="hover:text-noka-gold transition-colors">SERVICES</a>
                        <a href="#projects" className="hover:text-noka-gold transition-colors">PROJECTS</a>
                    </div>
                    <button className="bg-noka-gold text-noka-dark px-8 py-3 font-bold hover:bg-noka-gold-hover transition-colors rounded-sm flex items-center gap-2 group">
                        ESTIMATE
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center pt-24">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
                        alt="Modern Skyscraper Construction"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-noka-dark/95 via-noka-dark/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-noka-dark" />
                </div>

                <motion.div
                    style={{ opacity, scale }}
                    className="relative z-10 max-w-7xl mx-auto px-6 w-full"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-0.5 w-12 bg-noka-gold" />
                            <span className="text-noka-gold font-bold tracking-widest uppercase text-sm">Industrial Precision</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-8 leading-[1.1] uppercase">
                            Shaping The <br />
                            <span className="golden-text">Cityscapes</span> <br />
                            Of Tomorrow
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-xl border-l-2 border-noka-gold/30 pl-6 py-2">
                            Uncompromising quality in commercial and civil construction. We turn architectural vision into structural reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-3 bg-noka-gold text-noka-dark px-8 py-4 font-bold text-lg hover:bg-noka-gold-hover transition-all w-full sm:w-auto shadow-[0_0_30px_rgba(212,175,55,0.2)] group rounded-sm">
                                View Portfolio
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-10 left-6 z-10 hidden md:flex items-center gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div className="text-sm font-bold tracking-widest text-gray-400 rotate-180" style={{ writingMode: 'vertical-rl' }}>
                        SCROLL DOWN
                    </div>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[1px] h-24 bg-gradient-to-b from-noka-gold to-transparent"
                    />
                </motion.div>
            </section>

            {/* About / Intro Section */}
            <section id="about" className="py-24 relative z-20 bg-noka-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Visuals */}
                        <div className="relative">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction Site Worker"
                                className="w-4/5 h-[500px] object-cover rounded-sm border border-white/5"
                            />
                            <motion.img
                                initial={{ opacity: 0, x: 50, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                                alt="Architects consulting blueprints"
                                className="absolute -bottom-10 -right-4 w-3/5 h-[350px] object-cover rounded-sm border-8 border-noka-dark shadow-2xl"
                            />
                            <div className="absolute -z-10 bg-noka-gold w-full h-full top-6 -left-6 rounded-sm opacity-20" />
                        </div>

                        {/* Content */}
                        <div className="lg:pl-10 mt-16 lg:mt-0">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px w-8 bg-noka-gold" />
                                <span className="text-noka-gold font-bold uppercase tracking-wider text-sm">Who We Are</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Solid Foundations, <br />
                                <span className="text-gray-400 font-light">Enduring Structures.</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                                For over two decades, Noka Construction has been at the forefront of monumental developments.
                                We combine deep engineering expertise with modern technological advancements to deliver projects that redefine skylines and communities.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Advanced BIM Coordination",
                                    "Sustainable Building Practices (LEED)",
                                    "Impeccable Safety Records",
                                    "On-Time & On-Budget Delivery"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-noka-gold shrink-0" />
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-6 pb-6 border-b border-white/10">
                                <div className="text-5xl font-black text-white">25<span className="text-noka-gold">+</span></div>
                                <div className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                                    Years of <br /> Excellence
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Special Image + Stats Section */}
            <section className="py-24 relative mt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=2079&auto=format&fit=crop"
                        alt="Steel Framework"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-noka-dark/80 backdrop-blur-sm" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { num: "150+", label: "Projects Delivered" },
                            { num: "450", label: "Skilled Experts" },
                            { num: "98%", label: "Client Satisfaction" },
                            { num: "$1.2B+", label: "Managed Volume" }
                        ].map((stat, i) => (
                            <div key={i} className="relative group">
                                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 group-hover:from-noka-gold group-hover:to-[#FFE885] transition-all duration-300">
                                    {stat.num}
                                </div>
                                <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-32 relative z-20 bg-noka-gray">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px w-8 bg-noka-gold" />
                                <span className="text-noka-gold font-bold uppercase tracking-wider text-sm">Expertise</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold">Core <span className="font-light text-gray-400">Disciplines</span></h2>
                        </div>
                        <p className="text-gray-400 max-w-md text-right hidden md:block">
                            Comprehensive construction services tailored to complex structural requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Building2 className="w-8 h-8" />,
                                title: "Commercial Build",
                                desc: "State-of-the-art office spaces, retail complexes, and industrial facilities engineered for the future.",
                                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: <HardHat className="w-8 h-8" />,
                                title: "Civil Engineering",
                                desc: "Heavy civil infrastructure, urban development, and structural engineering with unwavering safety standards.",
                                img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                            },
                            {
                                icon: <Ruler className="w-8 h-8" />,
                                title: "Luxury Residential",
                                desc: "Bespoke home construction and high-end renovations tailored to exact architectural specifications.",
                                img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop"
                            }
                        ].map((service, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                key={i}
                                className="group relative overflow-hidden rounded-sm bg-black"
                            >
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-80 object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 flex flex-col justify-end">
                                    <div className="bg-noka-gold/10 w-14 h-14 rounded-full flex items-center justify-center text-noka-gold mb-6 border border-noka-gold/20 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {service.desc}
                                    </p>
                                    <a href="#" className="uppercase text-xs font-bold tracking-widest text-noka-gold flex items-center gap-2">
                                        Learn More <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 bg-noka-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px w-8 bg-noka-gold" />
                            <span className="text-noka-gold font-bold uppercase tracking-wider text-sm">Portfolio</span>
                            <div className="h-px w-8 bg-noka-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured <span className="font-light text-gray-400">Developments</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((proj, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                key={i}
                                className={`relative group overflow-hidden bg-black rounded-sm block ${i === 0 || i === 3 ? 'md:h-[600px]' : 'md:h-[400px]'}`}
                            >
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 max-h-[400px] md:max-h-none"
                                />
                                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <span className="text-noka-gold text-xs font-bold tracking-widest uppercase mb-2 block">{proj.category}</span>
                                        <h3 className="text-3xl font-bold text-white mb-4">{proj.title}</h3>
                                        <button className="flex justify-center items-center w-12 h-12 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <button className="px-10 py-4 font-bold tracking-widest uppercase text-sm border-2 border-noka-gold text-noka-gold hover:bg-noka-gold hover:text-black transition-colors rounded-sm">
                            View All Projects
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-noka-gold relative overflow-hidden">
                {/* Abstract pattern */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-black">
                    <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">Ready to build your vision?</h2>
                    <p className="text-xl font-medium opacity-80 mb-10">Partner with Noka Construction for unparalleled engineering excellence.</p>
                    <button className="bg-black text-white px-10 py-5 font-bold text-lg hover:bg-noka-gray transition-colors rounded-sm uppercase tracking-widest shadow-2xl">
                        Start A Conversation
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">

                    {/* Brand */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                            <Building2 className="w-8 h-8 text-noka-gold" />
                            <span className="text-2xl font-black tracking-widest uppercase">Noka</span>
                        </div>
                        <p className="text-gray-500 max-w-sm mb-8 text-sm leading-relaxed">
                            Setting the standard for modern construction management and general contracting since 1999. Delivering precision globally.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-noka-gold hover:text-black cursor-pointer transition-colors text-gray-400 font-bold text-xs uppercase tracking-wider">In</div>
                            <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-noka-gold hover:text-black cursor-pointer transition-colors text-gray-400 font-bold text-xs uppercase tracking-wider">Fb</div>
                            <div className="w-10 h-10 rounded-sm bg-white/5 flex items-center justify-center hover:bg-noka-gold hover:text-black cursor-pointer transition-colors text-gray-400 font-bold text-xs uppercase tracking-wider">Ig</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Company</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-noka-gold transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-noka-gold transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-noka-gold transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-noka-gold transition-colors">Safety Record</a></li>
                            <li><a href="#" className="hover:text-noka-gold transition-colors">News & Media</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Contact Info</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-noka-gold shrink-0 mt-0.5" />
                                <span>Fla3, 1B Edward St,<br />London SE8 5HA</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-noka-gold shrink-0" />
                                <span>+1 (555) 019-2038</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-noka-gold shrink-0" />
                                <span>build@nokaconstruction.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Newsletter</h4>
                        <p className="text-gray-500 text-sm mb-4">Subscribe to our latest industry insights and project reveals.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/5 border border-white/10 rounded-none px-4 py-3 w-full focus:outline-none focus:border-noka-gold text-sm text-white"
                            />
                            <button className="bg-noka-gold text-black px-5 py-3 font-bold hover:bg-noka-gold-hover transition-colors rounded-none">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs font-semibold tracking-widest uppercase">© 2026 Noka Construction. All rights reserved.</p>
                    <div className="flex gap-6 text-xs font-semibold tracking-widest uppercase text-gray-600">
                        <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
