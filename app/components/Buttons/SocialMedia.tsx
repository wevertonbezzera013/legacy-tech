import { Icon } from "../icons/icons";

export default function SocialMedia() {
  return (
    <div className="grid grid-cols-4 gap-10 absolute">
      <a className=" " href="" target="_blank">
        <Icon
          name="FaGithub"
          className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
        />
      </a>
      <a className="" href="wa.me/" target="_blank">
        <Icon
          name="FaWhatsapp"
          className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
        />
      </a>
      <a className="" href="" target="_blank">
        <Icon
          name="FaLinkedin"
          className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
        />
      </a>
      <a className="" href="mailto:" target="_blank">
        <Icon
          name="MdMail"
          className="text-white bg-primary-blue hover:bg-light-blue ease-in-out duration-300 rounded-full w-12 h-12 p-2"
        />
      </a>
    </div>
  );
}
