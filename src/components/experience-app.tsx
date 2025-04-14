import { Float } from "@react-three/drei";
import { FC, useEffect, useRef } from "react";
import { DoubleSide, Group } from "three";

export const ExperienceApp: FC<{}> = ({}) => {
	const groupRef = useRef<Group>(null);

	useEffect(() => {
		const listener = (e: Event) => {
			const scrollY = window.scrollY;
			const scrollHeight = document.body.scrollHeight;

			const _group = groupRef.current;
			const scrollPercent = scrollY / (scrollHeight - window.innerHeight)
			if (_group) {
				// _group.position.y = -4 * scrollPercent;
				_group.rotation.y =(Math.PI ) * scrollPercent;
			}
		};

		window.addEventListener("scroll", listener);

		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, []);
	return (
		<>
			<group ref={groupRef}>
				<Float
					speed={1}
					rotationIntensity={0.2}
					floatIntensity={1}
					floatingRange={[0.2, 2]}
				>
					<mesh>
						<planeGeometry args={[3, 5]} />
						<meshStandardMaterial color="orange" side={DoubleSide} />
					</mesh>
				</Float>
			</group>
		</>
	);
};
