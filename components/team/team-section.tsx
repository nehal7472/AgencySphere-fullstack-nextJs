import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { getTeamList } from "@/lib/services";

interface TeamMemberProps {
  id: number;
  name: string;
  bio: string;
  facebook: string;
  image: string;
  twitter: string;
  instagram: string;
  created_at: string;
  updated_at: string;
}

export default async function TeamSection() {
  const teamNumbers: TeamMemberProps[] = await getTeamList();

  return (
<<<<<<< HEAD
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="mb-10 text-center">
=======
    <section className="py-12 px-4 md:px-8 dark:bg-gray-900">
      <div className="text-center mb-10">
>>>>>>> parent of a86c610 (Project is ready to submit)
        <p className="text-sm font-semibold text-green-600 uppercase">
          Our Team Members
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Check our awesome team members
        </h2>
      </div>

<<<<<<< HEAD
      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
=======
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
>>>>>>> parent of a86c610 (Project is ready to submit)
        {teamNumbers.slice(0, 3).map((member) => (
          <Card
            key={member.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition group"
          >
            {/* Image with overlay */}
            <div className="relative w-full h-80 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
              />

              {/* Social overlay */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 
                              bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md"
              >
                <a
                  href={member.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <CardContent className="bg-white dark:bg-[#18181B] py-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              {member.bio && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {member.bio}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
