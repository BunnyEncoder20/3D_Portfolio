import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Target = (props) => {
	const targetRef = useRef();
	const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

	return (
	<mesh {...props} ref = { targetRef }>
		<primitive object = { scene } />
	</mesh>
	)
}

export default Target