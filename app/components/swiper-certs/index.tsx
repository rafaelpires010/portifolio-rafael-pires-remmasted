'use client'

import { Fragment, useState } from 'react'
import { Modal } from '@/app/components/Modal'
import { Certificate } from '@/app/types/certificates'
import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionTitle } from '@/app/components/section-title'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

type CertsProps = { certs: Certificate[] }

export const CertsSection = ({ certs }: CertsProps) => {
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(
    null,
  )

  const openModal = (index: number) => {
    setSelectedCertIndex(index)
  }

  const closeModal = () => {
    setSelectedCertIndex(null)
  }

  return (
    <Fragment>
      <section>
        <SectionTitle
          className="container"
          subtitle="Certificados"
          title="certificados"
        />
        <HorizontalDivider className="mb-16" />
        <div className="lg:ml-[100px]">
          <Swiper
            breakpoints={{
              340: { slidesPerView: 1, spaceBetween: 15 },
              700: { slidesPerView: 2, spaceBetween: 15 },
              1450: { slidesPerView: 3, spaceBetween: 15 },
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {certs.map((cert, index) => (
              <SwiperSlide key={cert.title}>
                <div
                  onClick={() => openModal(index)}
                  className="flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[200px] w-[330px] lg:h-[200px] lg:w-[350px] overflow-hidden cursor-pointer border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all"
                >
                  <Image
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 duration-500 transition-all"
                    width={400}
                    height={200}
                    src={cert.thumbnail.url}
                    alt={`Thumbnail do certificado ${cert.title}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {selectedCertIndex !== null && (
        <Modal
          cert={certs[selectedCertIndex]}
          isOpen={true}
          setModalOpen={closeModal}
        />
      )}
    </Fragment>
  )
}
