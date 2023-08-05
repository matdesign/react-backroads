import React from "react";
import Title from "./Title";
import { services } from "./data";

const Services = () => {
	return (
		<section
			className="section services"
			id="services"
		>
			<Title
				title="our"
				subTitle="Services"
			/>
			<div className="section-center services-center">
				{services.map((lservice) => {
					return (
						<article
							className="service"
							key={lservice.id}
						>
							<span className="service-icon">
								<i className={lservice.icon}></i>
							</span>
							<div className="service-info">
								<h4 className="service-title">{lservice.title}</h4>
								<p className="service-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.
								</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
