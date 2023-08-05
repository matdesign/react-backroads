import React from "react";
import Title from "./Title";
import { tours } from "./data";

const Tours = () => {
	return (
		<section
			className="section"
			id="tours"
		>
			<Title
				title="featured"
				subTitle="Tours"
			/>

			<div className="section-center featured-center">
				{tours.map((ltour) => {
					return (
						<article
							className="tour-card"
							key={ltour.id}
						>
							<div className="tour-img-container">
								<img
									src={ltour.image}
									className="tour-img"
									alt=""
								/>
								<p className="tour-date">{ltour.date}</p>
							</div>
							<div className="tour-info">
								<div className="tour-title">
									<h4>{ltour.title}</h4>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime
									reprehenderit eum quod exercitationem fugit, qui corporis.
								</p>
								<div className="tour-footer">
									<p>
										<span>
											<i className="fas fa-map"></i>
										</span>{" "}
										{ltour.location}
									</p>
									<p>6 days</p>
									<p>from $2100</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Tours;
