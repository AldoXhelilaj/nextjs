import LoaderSvg from '../../public/loader.svg';
import Image from 'next/image';

const Loader = ()=> {
    return <Image src={LoaderSvg} width={300} height={300}  alt="Loading"/>;
}

export default Loader;