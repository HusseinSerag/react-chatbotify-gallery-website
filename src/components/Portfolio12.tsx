import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleLeft,
	faAngleRight,
	faPlay,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./Portfolio12.css";

const portfolios = [
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses1.jpg",
		category: "Marketing",
		title: "The Complete Digital Marketing Guide Course",
		details: "Some quick example text to build on the card the bulk content...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses2.jpg",
		category: "Development",
		title: "Izomart is providing free course on Web Development",
		details: "Learn web development with Izomart and then you will be...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses3.jpg",
		category: "Branding",
		title: "A to Z of Branding with Filinzo Academy",
		details:
			"Why should you have the branding knowledge? This is the very first...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses4.jpg",
		category: "Technology",
		title: "Master React JS and hire your self for sure!",
		details: "React JS: The most popular framework in today's programming...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses5.jpg",
		category: "Content Writing",
		title: "Do you know the rules of Writing?",
		details:
			"Yes! Though we are writing since our childhood, there are some...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses6.jpg",
		category: "Freelancing",
		title: "Digital Marketing and Web Development first time!",
		details:
			"In this growing world marketing and web development is enrolling the...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses15.jpg",
		category: "Designing",
		title: "Learn arcitecture without having a degree!",
		details:
			"Architecture is a widely dominated sector in enginnering. So why not...",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
	{
		bannerImg: "https://cdn.easyfrontend.com/pictures/courses/courses8.jpg",
		category: "Film & TV",
		title: "Become a master of model in a week with Coursera",
		details:
			"Vitae bibendum egestas magna sit elit non. Netus pharetra felis....",
		authorImg:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
		author: "John Smith",
	},
];

const pagination = [
	{
		isActive: true,
		href: "#!",
		value: "1",
	},
	{
		isActive: false,
		href: "#!",
		value: "2",
	},
	{
		isActive: false,
		href: "#!",
		value: "3",
	},
	{
		isActive: false,
		href: "#!",
		value: "4",
	},
	{
		isActive: false,
		href: "#!",
		value: "5",
	},
	{
		isActive: false,
		href: "#!",
		value: "...",
	},
	{
		isActive: false,
		href: "#!",
		value: "11",
	},
];

const tabBar = [
	{
		isActive: true,
		href: "#!",
		value: "Most Popular",
	},
	{
		isActive: false,
		href: "#!",
		value: "Culinary Arts",
	},
	{
		isActive: false,
		href: "#!",
		value: "Film & TV",
	},
];

const PortfolioItem = ({ item }) => (
	<div className="bg-slate-50 dark:bg-slate-800 h-full rounded overflow-hidden">
		<div className="relative">
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center justify-center w-12 h-12 bg-white bg-opacity-50 rounded-full cursor-pointer">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white bg-opacity-20"></div>
				<FontAwesomeIcon icon={faPlay} className="ml-1" />
			</div>
			<img src={item.bannerImg} className="w-full" alt={item.title} />
		</div>
		<div className="p-4">
			<a href="#!">
				<p className="text-[15px] opacity-80 mb-2">{item.category}</p>
			</a>
			<a href="#!">
				<h5 className="text-[19px] font-medium leading-snug mb-2">
					{item.title}
				</h5>
			</a>
			<p className="text-[15px] opacity-80">{item.details}</p>
			<div className="flex justify-between mt-4 mb-2">
				<div className="flex items-center">
					<div className="mr-2">
						<img
							src={item.authorImg}
							alt={item.author}
							className="max-w-full h-auto rounded-full border"
							width="40"
						/>
					</div>
					<div>
						<h4 className="text-base font-medium mb-0">{item.author}</h4>
					</div>
				</div>
				<a
					href="#!"
					className="border border-blue-600 px-3 py-2 hover:bg-blue-600 hover:text-white duration-300 rounded uppercase text-sm"
					type="button"
				>
					Gift
				</a>
			</div>
		</div>
	</div>
);

PortfolioItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Pagination = () => (
	<nav>
		<ul className="flex flex-wrap gap-3 justify-center mt-12">
			<li>
				<a
					className="bg-blue-600 text-white hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer"
					href="#!"
				>
					<FontAwesomeIcon icon={faAngleLeft} />
				</a>
			</li>

			{pagination.map((page, j) => (
				<li
					className={`border border-gray-300 dark:border-gray-800 hover:bg-blue-600 hover:text-white w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer ${
						page.isActive && "bg-blue-600 text-white hover:bg-opacity-90"
					}`}
					key={j}
				>
					<a className="m-0" href={page.href}>
						{page.value}
					</a>
				</li>
			))}

			<li>
				<a
					className="bg-blue-600 text-white hover:bg-opacity-90 w-12 h-12 flex justify-center items-center rounded text-lg cursor-pointer"
					href="#!"
				>
					<FontAwesomeIcon icon={faAngleRight} />
				</a>
			</li>
		</ul>
	</nav>
);

const TabBar = ({ tabItem }) => (
	<li
		className={`px-4 py-2 ${tabItem.isActive && "border-b-2 border-blue-600"}`}
	>
		<a className="nav-link" href={tabItem.href}>
			{tabItem.value}
		</a>
	</li>
);

TabBar.propTypes = {
	tabItem: PropTypes.object.isRequired,
};

const Portfolio12 = () => {
	return (
		<section className="ezy__portfolio12  py-14 md:py-24 bg-white dark:bg-black text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col items-center text-center">
					<h1 className="text-3xl md:text-[45px] font-bold mb-2">
						Our Exclusive Courses
					</h1>

					{/*  tab bar  */}
					<ul className="flex flex-wrap justify-center my-6">
						{tabBar.map((tabItem, k) => (
							<TabBar tabItem={tabItem} key={k} index={k} />
						))}
					</ul>
				</div>

				<div>
					{/*  tab contents  */}
					<div className="grid grid-cols-12 gap-6 mt-6">
						{portfolios.map((item, i) => (
							<div
								className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
								key={i}
							>
								<PortfolioItem item={item} />
							</div>
						))}
					</div>

					{/*  pagination  */}
					<div className="col-span-12">
						<Pagination />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio12;

