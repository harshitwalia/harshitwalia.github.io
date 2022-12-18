const careerStart = new Date(2019, 6, 25);
export const yearsOfExperience = Math.abs(
	new Date(Date.now() - careerStart.getTime()).getUTCFullYear() - 1970
);

export const entries = [
	{
		id: 'amazon',
		title: 'Amazon',
		jobTitle: 'Software Development Engineer II',
		timeframe: 'August, 2022 → Now',
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
		timeframe: 'May, 2021 → July, 2022',
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
				color: 'secondary',
				text: 'Slang'
			},
			{
				color: 'secondary',
				text: 'Kafka'
			}
		]
	},
	{
		id: 'tower-research-capital',
		title: 'Tower Research Capital',
		jobTitle: 'Software Engineer II',
		timeframe: 'June, 2019 → May, 2021',
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
				color: 'secondary',
				text: 'Wireshark'
			},
			{
				color: 'secondary',
				text: 'MongoDB'
			}
		]
	},
	{
		id: 'samsung',
		title: 'Samsung Research Institute',
		jobTitle: 'Student Trainee',
		timeframe: 'May, 2018 → July, 2018',
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
				color: 'secondary',
				text: 'CNN'
			},
			{
				color: 'secondary',
				text: 'SSR-Net'
			}
		]
	}
];
