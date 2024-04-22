import { RiCloseLine } from 'react-icons/ri'
import { IoMdDownload } from 'react-icons/io'
import Image from 'next/image'
import { Button } from '../button'
import { Certificate } from '@/app/types/certificates'
import { RichText } from '../rich-text'
type CertProps = {
  certs: Certificate[]
  isOpen: boolean
  setModalOpen: () => void
}
function abrirLinkNovaJanela(url: string | URL | undefined) {
  window.open(url, '_blank');
}
export const Modal = ({ isOpen, setModalOpen, certs }: CertProps) => {
  if (!isOpen) return null
  return (
    <section className="fixed inset-0 bg-gray-800 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-20">
      {certs.map((cert, index) => (
        <div key={index} className="w-[900px] flex flex-col">
          <div className="bg-gray-800 p-2 rounded-lg mb-4 px-4">
            <div className="flex">
              <div className="w-full"></div>
              <button onClick={setModalOpen}>
                <RiCloseLine size={44} className="text-emerald-400" />
              </button>
            </div>
            <Image
              src={cert.thumbnail.url}
              alt={`Thumbnail do certificado ${cert.title}`}
              width={380}
              height={200}
              unoptimized
              className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all rounded-lg"
            />
            <div className="flex mb-4 mt-4">
              <div className="w-full flex">
                <h3 className="text-emerald-400 text-2xl font-medium">
                  {cert.title}
                </h3>
                <h3 className="text-2xl text-gray-400 px-2">{`(${cert.instituition})`}</h3>
              </div>
              <Button>
                <a
                  className="flex justify-center items-center gap-1"
                  href="#"
                  onClick={() => abrirLinkNovaJanela(cert.url)}
                >
                  <IoMdDownload />
                  Download
                </a>
              </Button>
            </div>
            <p className="text-gray-400 mb-4">
              <RichText content={cert.description.raw}></RichText>
            </p>
            <span className="text-emerald-400 font-medium text-xl px-2">
              Aprendizados:
            </span>
            <span className="font-medium text-xl text-gray-300">
              {cert.technologies.map((x) => x.name).join(', ')}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}
