import './Team.css'

const Team = () => {
  const teamMembers = [
    {
      name: "David Patiño",
      description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    },
    {
      name: "Lizeth Victoria Franco",
      description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    },
    {
      name: "Jordan Valencia",
      description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
    },
    {
      name: "Juan Manuel Hurtado Isaza",
      description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
    }
  ];

  return (
    <div className="text-center py-8">
      <h2 className="text-3xl font-bold mb-4">¡Conoce nuestro equipo de trabajo!</h2>
      <p className="text-lg mb-8">
        Somos jóvenes apasionados por el desarrollo de software web y utilizamos las últimas tecnologías del mercado para impulsar tu compañía o marca.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-64 p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-gray-900 font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;