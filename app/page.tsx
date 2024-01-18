import { config } from '@/data/config'
// import Image from '@/components/Image';
import Image from 'next/image'
import DiscordTag from '@/components/DiscordTag';
import AllBadges from '@/components/AllBadges';

export default function Home() {
  return (
    <main>
      <div>
        <div className="flex flex-col">
          <div className="bg-primary flex min-h-screen flex-col">
            <div
              style={{ backgroundSize: "cover", backgroundPosition: "center" }}
              className="bg-banner h-60 w-full"
            />
            <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
              <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
                <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                  <div className="relative">
                    <Image
                      className="bg-primary border-primary h-28 w-28 rounded-full border-4 border-solid object-cover"
                      src={config.avatar}
                      alt="pfp"
                      width={350}
                      height={350}
                    />
                  </div>
                  <div className="relative flex flex-row items-center justify-center">
                    <div className="mb-1 flex flex-col">
                      <div className="mt-1 flex flex-row items-center justify-center">
                        <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                          {config.name}
                        </span>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="ml-1 h-5 w-5 text-indigo-600"
                          >
                            <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                          </svg>
                        </div>
                      </div>
                      <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                        <a
                          // rel="noopener noreferrer nofollow"
                          // target="_blank"
                          // href=""
                        >
                          {config.belowLink}
                        </a>
                      </p>
                      <div className="mt-3 flex flex-col">
                        <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                          {config.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <AllBadges />
                  </div>
                  <div className="mt-1 rounded pt-2">
                    <div>
                      <div className="flex flex-row flex-wrap  items-center justify-center">
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.twitter}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current text-white transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <title>Twitter (X)</title>
                            <path fill="#F0F0F0" d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" /></svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.instagram}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current text-white transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32">
                            <title>Instagram</title>
                            <path fill="#F0F0F0" d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z" /></svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.spotify}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current text-white transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 15 15">
                            <title>Spotify</title>
                            <path fill="#F0F0F0" d="M14 7.5C14 11.0897 11.0903 14 7.5 14V15C11.6426 15 15 11.6419 15 7.5H14ZM7.5 14C3.90974 14 1 11.0897 1 7.5H0C0 11.6419 3.35739 15 7.5 15V14ZM1 7.5C1 3.91029 3.90974 1 7.5 1V0C3.35739 0 0 3.35806 0 7.5H1ZM7.5 1C11.0903 1 14 3.91029 14 7.5H15C15 3.35806 11.6426 0 7.5 0V1ZM3.6619 10.1162C4.64825 9.87576 5.86144 9.77072 7.05416 9.88791C8.25009 10.0054 9.38823 10.3424 10.2559 10.9525L10.8311 10.1345C9.77768 9.39382 8.45578 9.02081 7.15195 8.8927C5.84491 8.76428 4.51862 8.87807 3.42506 9.14466L3.6619 10.1162ZM3.32624 7.99237C6.772 7.38275 9.17433 7.69462 11.1649 9.12359L11.7481 8.31123C9.44985 6.66142 6.73182 6.37433 3.15202 7.00766L3.32624 7.99237ZM3.10135 5.84102C4.45435 5.36298 6.10442 5.1645 7.72549 5.29726C9.34836 5.43016 10.9042 5.8917 12.0886 6.69623L12.6505 5.86901C11.2863 4.94241 9.55125 4.44343 7.80712 4.30059C6.06118 4.15761 4.26817 4.36818 2.76821 4.89814L3.10135 5.84102Z" /></svg>
                        </a>
                        <a
                          rel="noopener noreferrer nofollow"
                          target="_blank"
                          href={config.socials.github}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg className="h-6 fill-current text-white transition-all"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <title>Github</title>
                            <path fill="#F0F0F0" d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" />
                            <path fill="#F0F0F0" d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"/>
                            </svg>
                        </a>
                        <DiscordTag discordTag={config.socials.discordTag} />
                        <a
                          rel="noopener noreferrer nofollow"
                          href={config.socials.mail}
                          className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 text-gray-700 dark:text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#F0F0F0"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                            <title>Email</title>
                          </svg>
                        </a>
                        <div className="max-w-s mt-1 w-full space-y-2">
                          <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                            <a
                              href={config.portfolio}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="w-full transition-all sm:hover:opacity-70"
                            >
                              <div>
                                <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                  <div className="flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <svg className="h-6 fill-current text-white transition-all"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024 1024">
                                    <path d="M455.176 531.168V183.936h140.608v347.232h129.304v-387.2c0-49.248-40.056-89.344-89.296-89.344H415.176c-49.248 0-89.312 40.096-89.312 89.344v387.192h129.312z" fill="#E5226B" />
                                    <path d="M1016 876.376c0 50.888-41.224 92.112-92.056 92.112H100.12C49.224 968.488 8 927.264 8 876.376V374.424c0-50.888 41.224-92.12 92.12-92.12h823.832c50.832 0 92.056 41.232 92.056 92.12v501.952z" fill="#F5B146" /><path d="M342.064 968.488H100.12C49.224 968.488 8 927.264 8 876.376V374.424c0-50.888 41.224-92.12 92.12-92.12h791.504l-549.56 686.184z" fill="#FFC83E" /><path d="M762.824 283.216h64.648v686.16h-64.648zM201.96 283.216h64.656v686.16h-64.656z" fill="#0092D2" />
                                    <path d="M234.288 283.216h32.328v686.16h-32.328zM795.144 283.216h32.328v686.16h-32.328z" fill="#0085BF" />                                  
                                   </svg>
                                    </div>
                                    <div className="mx-4 flex flex-col">
                                      <span
                                        title="Soon Portfolio"
                                        className="text-ellipsis text-[16px] text-zinc-400"
                                      >
                                        Soon Portfolio
                                      </span>
                                      <span
                                        title=""
                                        className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                      >
                                        {config.portfolio.replace("https://", "")}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="absolute right-2 text-zinc-600 transition-all">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="#F0F0F0"
                                      aria-hidden="true"
                                      className="h-4 w-8"
                                    >
                                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>

                        </div>
                        <div className="max-w-s mt-1 w-full space-y-2">
                          <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                            <a
                              href={config.buymeacoffee}
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="w-full transition-all sm:hover:opacity-70"
                            >
                              <div>
                                <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                  <div className="flex items-center justify-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <svg className="h-6 fill-current text-white transition-all"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="244px" height="244px"
                                    viewBox="0 0 1024.00 1024.00">
                                    <path d="M237.717333 320L277.333333 597.333333h469.333334l39.616-277.333333z" fill="#FFC107" />
                                    <path d="M832 320v-53.333333a32 32 0 0 0-32-32h-576A32 32 0 0 0 192 266.666667V320h640z" fill="#795548" />
                                    <path d="M280.384 618.666667L320 896h384l39.616-277.333333z" fill="#77574F" />
                                    <path d="M512 597.333333m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0Z" fill="#77574F" />
                                    <path d="M426.666667 597.333333c0-15.616 4.501333-30.058667 11.84-42.666666h-167.253334l15.232 106.666666h169.621334A84.778667 84.778667 0 0 1 426.666667 597.333333zM585.493333 554.666667c7.338667 12.608 11.84 27.050667 11.84 42.666666a84.778667 84.778667 0 0 1-29.44 64h169.621334l15.232-106.666666h-167.253334zM768 128H256l-21.333333 106.666667h554.666666z" fill="#4E342E" />
                                    <path d="M512 448a149.333333 149.333333 0 1 1 0 298.666667 149.333333 149.333333 0 0 1 0-298.666667m0-21.333333c-94.101333 0-170.666667 76.565333-170.666667 170.666666s76.565333 170.666667 170.666667 170.666667 170.666667-76.565333 170.666667-170.666667-76.565333-170.666667-170.666667-170.666666z" fill="#5D4037" />
                                    <path d="M512 448a149.333333 149.333333 0 1 0 0 298.666667 149.333333 149.333333 0 0 0 0-298.666667z m0 234.666667a85.333333 85.333333 0 1 1 0-170.666667 85.333333 85.333333 0 0 1 0 170.666667z" fill="#FFF3E0" /></svg>
                                    </div>
                                    <div className="mx-4 flex flex-col">
                                      <span
                                        title="Buy me a coffee!"
                                        className="text-ellipsis text-[16px] text-zinc-400"
                                      >
                                        Buy me a coffee
                                      </span>
                                      <span
                                        title=""
                                        className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                      >
                                        {config.buymeacoffee.replace("https://", "")}
                                      </span>
                                    </div>
                                  </div>
                                  <span className="absolute right-2 text-zinc-600 transition-all">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="#F0F0F0"
                                      aria-hidden="true"
                                      className="h-4 w-8"
                                    >
                                      <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                    </svg>
                                  </span>
                                </span>
                              </div>
                            </a>
                          </div>
                          
                        </div>
                      </div>
                      <div className="mb-4 flex justify-center">
                        <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 flex justify-center">
              <div className="bg-primary text-gray-200 flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium">
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    </main>
  )
}
