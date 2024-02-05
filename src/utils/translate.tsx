
interface ITranslate {
	id: number;
	title: string;
	body: React.ReactNode;
}

export const translate = [
	{
		rus: {
			id: 1,
			title: "Russian",
			body: (
				<>
					Меня зовут <span>Виталий</span>, и я начинающий разработчик с глубоким интересом к созданию инновационных программных решений. Обладаю стабильным фундаментом в языках программирования, таких как JavaScript, TypeScript, и опытом работы с технологиями <span>HTML, CSS, React, MongoDb, PostgresSQL, Tailwind, Express, NodeJS, ReduxJS, Git</span>.

					Меня вдохновляет возможность внедрять передовые технологии для решения сложных задач. Готов обучаться и активно участвовать в командных проектах, стремясь к постоянному совершенствованию своих навыков. Моей целью является не только достижение успешных результатов, но и постоянное развитие в динамичной области разработки программного обеспечения.

					Мои сильные стороны включают умение быстро обучаться, целеустремленность и стрессоустойчивость.
				</>
			),
		},
		eng: {
			id: 1,
			title: "English",
			body: (
				<>
					My name is <span>Vitaliy</span>, and I am a junior developer with a profound interest in creating innovative software solutions.
					I have a stable foundation in programming languages such as JavaScript, TypeScript, and experience working with technologies like <span>HTML, CSS, React, MongoDB, PostgreSQL, Tailwind, Express, NodeJS, ReduxJS, Git</span>.

					I am inspired by the opportunity to implement cutting-edge technologies to solve complex problems. I am ready to learn and actively participate in team projects, aiming for continuous improvement of my skills. My goal is not only to achieve successful results but also to constantly evolve in the dynamic field of software development.

					My strengths include the ability to learn quickly, determination, and resilience to stress.
				</>
			),
		}
	}
]