const careerStart = new Date(2019, 6, 25);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: 'amazon',
		title: 'Amazon',
		jobTitle: 'Software Development Engineer II',
		timeframe: '2022 → Now',
		current: true,
		location: 'Gurugram, India',
		description:
			'Building interfaces and frameworks to improve Client Experience in Consumer Payments Team',
		tags: [
			{
				color: 'primary',
				text: 'React'
			},
			{
				color: 'primary',
				text: 'Java'
			},
			{
				color: 'primary',
				text: 'Python'
			},
			{
				color: 'primary',
				text: 'AWS'
			}
		]
	},
	{
		id: 'goldman-sachs',
		title: 'Goldman Sachs',
		jobTitle: 'Technology Analyst',
		timeframe: '2021 → 2022',
		location: 'Bangalore, India',
		description:
			"Developer in Global Markets Division, with special emphasis on creating intuitive trading platforms that track the firm’s inventory in real-time and provide better visibility and control over intra-day liquidity, ultimately facilitating traders to act decisively.",
		tags: [
			{
				color: 'primary',
				text: 'Java'
			},
			{
				color: 'primary',
				text: 'Design Pattern'
			},
			{
				color: 'primary',
				text: 'Slang'
			},
			{
				color: 'primary',
				text: 'Kafka'
			}
		]
	},
	{
		id: 'tower-research-capital',
		title: 'Tower Research Capital',
		jobTitle: 'Software Engineer II',
		timeframe: '2019 → 2021',
		location: 'Gurugram, India',
		description:
			'Worked on developing softwares to improve automate & infrastructure surrounding the plumbing of finance',
		tags: [
			{
				color: 'primary',
				text: 'C++'
			},
			{
				color: 'primary',
				text: 'Python'
			},
			{
				color: 'primary',
				text: 'Bash'
			},
			{
				color: 'primary',
				text: 'Wireshark'
			},
			{
				color: 'primary',
				text: 'MongoDB'
			}
		]
	},
	{
		id: 'samsung',
		title: 'Samsung Research Institute',
		jobTitle: 'Student Trainee',
		timeframe: '2018 → 2018',
		location: 'Bangalore, India',
		description:
			'Developed Apparent Age Estimation Software for Data Intelligence Team',
		tags: [
			{
				color: 'primary',
				text: 'OpenCV'
			},
			{
				color: 'primary',
				text: 'Python'
			},
			{
				color: 'primary',
				text: 'CNN'
			},
			{
				color: 'primary',
				text: 'SSR-Net'
			}
		]
	},
	{
		id: 'codingforce',
		title: 'Coding Force',
		jobTitle: 'Founder',
		timeframe: '2015 → 2019',
		location: 'Delhi, India',
		description:
			'A community-driven platform of top-tier engineering college graduates for professional networking',
		tags: [
			{
				color: 'primary',
				text: 'Teaching'
			},
			{
				color: 'primary',
				text: 'Mentoring'
			},
			{
				color: 'primary',
				text: 'Programming'
			},
			{
				color: 'primary',
				text: 'Education'
			},
			{
				color: 'primary',
				text: 'Networking'
			}
		]
	}
];
