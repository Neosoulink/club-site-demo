"use client";

import { ExperienceApp } from "@/components/experience-app";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

const HomePage = () => {
	const expRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const listener = (e: Event) => {
			const scrollY = window.scrollY;
			const scrollHeight = document.body.scrollHeight;

			const _group = expRef.current;
			const scrollPercent = scrollY / (scrollHeight - window.innerHeight);

			if (_group) {
				_group.style.position = "fixed";
        _group.style.top = "0px";

				if (scrollPercent > 0.5) {
					_group.style.position = "absolute";
          _group.style.top = `${(500 + "px")}`;
				}
			}
		};

		window.addEventListener("scroll", listener);

		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, []);

	return (
		<div
			style={{ height: "2000px" }}
			className="bg-radial-[at_50%_75%] from-gray-200 via-gray-300 to-gray-400 to-90% h"
		>
			<div
				ref={expRef}
				className=" left-0"
				style={{ height: "100vh", width: "100vw", position: "fixed", top: "0" }}
			>
				<Canvas>
					<ExperienceApp />

					<ambientLight />
					<Environment
						background={false}
						backgroundBlurriness={0}
						backgroundIntensity={1}
						backgroundRotation={[0, Math.PI / 2, 0]}
						environmentIntensity={1}
						environmentRotation={[0, Math.PI / 2, 0]}
						files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
						path="/"
						preset="sunset"
						scene={undefined}
					/>
				</Canvas>
			</div>
		</div>
	);
};

export default HomePage;
