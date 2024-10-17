

export const Content = [
    {
        section: 'navbar',
        data: {
            logo: "/assets/svg/logo_blue.svg",
            links: [
                { href: "/home", text: "Home" },
                { href: "/medical-history", text: "Medical History" },
            ],
            profileDropdown: true
        }
    },
    {
        section: 'hero-section',
        data: {
            heading: "Welcome To The Patient Portal",
            subheading: "Boost Your Healthcare Experience with Access to Prestigious Global Clinics",
            image: "/assets/svg/hero.svg"
        }
    },
    {
        section: 'hero-sectiontwo',
        data: {
            heading: "Want To Earn Rewards?",
            subheading: "Take control of what information you would like to share to earn rewards directly",
            miniheading: "You will need to add a bank account to your profile to start earning rewards.",
            image: "/assets/svg/hero-two.svg",
            subheadingColor: "text-fade-blue",
            miniheadingcolor: "text-gray",
            button: {
                label: "Allow",
                href: "/rewards"
            }

        }
    },

    {
        section: 'reward-hero',
        data: {
            heading: 'Rewards',
            subheading: '$ 20',
            subheadingColor: "text-fade-blue",
            subheadingFontSize: '1.5rem',
            headingFontSize: '1rem',
            image: "/assets/svg/hero-two.svg",

            button: {
                text: "Withdraw",
                label: "Allow",
                href: "/get-started",
                backgroundColor: "bg-gradient-bg",
                type: "submit"
            },
            balance: 0
        }

    },

    {
        section: 'footer-section',
        data: {
            logoSrc: "/assets/svg/blockMedSkylogo.svg",
            tagline: "Secure, Empower, Thrive",
            usefulLinks: [
                { href: "/home", text: "Home" },
                { href: "/medical-history", text: "Medical History" },
            ],
            otherLinks: [
                { href: "/profile", text: "Profile" },
                { href: "/change-security", text: "Security & sign in" },
            ],
            communityHeading: "Join Our Community.",
            communityInputPlaceholder: "Your email here",
            communityInputSuffix: "Subscribe",
            footerText: "© 2024 BlockMed Pro™. All Rights Reserved."
        }
    },


    {
        section: 'health-problems',
        data: {
            problems: [
                'Anxiety', 'Depression', 'Panic Attacks', 'Headaches/Migraines', 'Stroke/TIA',
                'Seizures/Epilepsy', 'Diabetes', 'Thyroid disease (overactive or underactive)',
                'Kidney Problems', 'Urinary Problems', 'Gynecological problems', 'Heart Problems',
                'Arrhythmias (abnormal heart rhythms)', 'High Blood Pressure/Hypertension', 'Asthma',
                'COPD', 'Cancer', 'Eczema', 'Psoriasis', 'Other skin problems', 'Osteoarthritis',
                'Rheumatoid Arthritis', 'Other'
            ]
        }
    },
    {
        section: 'family-history',
        data: [
            'Anxiety', 'Depression', 'Panic Attacks', 'Headaches/Migraines', 'Stroke/TIA',
            'Seizures/Epilepsy', 'Diabetes', 'Thyroid disease (overactive or underactive)',
            'Kidney Problems', 'Urinary Problems', 'Gynecological problems', 'Heart Problems',
            'Arrhythmias (abnormal heart rhythms)', 'High Blood Pressure/Hypertension', 'Asthma',
            'COPD', 'Cancer', 'Eczema', 'Psoriasis', 'Other skin problems', 'Osteoarthritis',
            'Rheumatoid Arthritis', 'Other Family History'
        ]
    },
    {
        section: 'medication-table',
        data: [
            {
                name: 'Paracetamol',
                strength: '500mg',
                formulation: 'Tablets',
                dosage: '1 Tablet Twice A Week',
            },
        ],


    },
    {
        section: 'profile-dropdown',
        data: {
            profile: {
                text: "Hello, User",
                accountText: "My Account",
                options: [
                    {
                        href: "/profile",
                        svg: 'heroicons-outline:user',
                        text: "Profile",
                    },
                    {
                        href: "/change-security",
                        svg: 'mage:lock',
                        text: "Security and sign in",
                    },
                    {
                        href: "/earn-from-info",
                        svg: 'healthicons:money-bag-outline',
                        text: "Earn from my info",

                    },
                    {
                        href: "#",
                        svg: 'streamline:logout-1',
                        text: "Logout",
                        isLogout: true,
                    },
                ],
            },
        },
    },
    {
        section: 'profile-section',
        data: {
            email: "Jhon123@gmail.com",
            password: "**********",
            changeEmailLink: "/change-email",
            changePasswordLink: "/change-security-password"
        }
    },
    {
        section: 'security-question',
        data: {
            heading: "Security Questions",
            questions: [
                { label: "Question 1", text: "What is your mother's maiden name?" },
                { label: "Question 2", text: "What is the name of the street you grew up on?" },
                { label: "Question 3", text: "What is your favorite food?" }
            ],
            editLink: "/change-security-question"
        }
    },
    {
        section: 'Earn from my Info',
        data: {
            heading: "Monetize your data by sharing your medical information to earn rewards",
            image: "/assets/images/earnBanner.png"
        }
    },
    {
        section: 'Languages',
        data: {
            heading: 'Select your preferred language from the list below',
            image: '/assets/images/languageBanner.png',
            languages: [
                "English",
                "Spanish",
                "French",
                "German",
                "Chinese",
                "Japanese",
                "Korean",
                "Russian",
                "Portuguese",
                "Italian",
                "Arabic",
                "Hindi",
                "Bengali",
                "Punjabi",
                "Turkish",
                "Vietnamese",
                "Polish",
                "Thai",
                "Swedish",
                "Finnish",
                "Danish",
                "Norwegian",
                "Czech",
                "Slovak",
                "Hungarian",
                "Romanian",
                "Hebrew",
                "Malay",
                "Indonesian",
                "Swahili",
                "Ukrainian",
                "Lithuanian",
                "Latvian",
                "Estonian",
                "Bulgarian",
                "Serbian",
                "Croatian",
                "Slovenian"
            ]
        }
    }
];
