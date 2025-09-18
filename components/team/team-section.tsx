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
    <section className="py-12 px-4 md:px-8 dark:bg-gray-900">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold text-green-600 uppercase">
          Our Team Member
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Check our awesome team members
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {teamNumbers.slice(0, 3).map((member) => (
          <Card
            key={member.id}
            className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image with overlay */}
            <div className="relative w-full h-80">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-t-2xl"
              />

              {/* Social overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md">
                <a
                  href={member.facebook}
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href={member.twitter}
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href={member.instagram}
                  className="text-gray-600 hover:text-green-600"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Content */}
            <CardContent className="bg-white dark:bg-[#18181B] py-4 text-center">
              <h3 className="text-lg font-semibold">{member.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
