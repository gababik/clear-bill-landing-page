import { Github, Linkedin, Mail } from "lucide-react"

const members = [
  {
    name: "George Babik",
    major: "Electrical Engineering + CS Minor",
    school: "UC Riverside",
    grad: "Jun 2026",
    linkedin: "#",
    github: "https://github.com/gababik",
    email: "mailto:gbabi001@ucr.edu",
  },
  {
    name: "Javier Herrera Jr.",
    major: "Computer Science",
    school: "UC Riverside",
    grad: "Jun 2026",
    linkedin: "#",
    github: "#",
    email: "mailto:jherr116@ucr.edu",
  },
  {
    name: "Vasan Insixiengmay",
    major: "Computer Science",
    school: "UC Riverside",
    grad: "Jun 2026",
    linkedin: "#",
    github: "#",
    email: "mailto:vinsi001@ucr.edu",
  },
  {
    name: "Kason Lau",
    major: "Computer Engineering",
    school: "UC Riverside",
    grad: "Jun 2026",
    linkedin: "#",
    github: "#",
    email: "mailto:klau045@ucr.edu",
  },
  {
    name: "Selina Wu",
    major: "Computer Science",
    school: "UC Riverside",
    grad: "Jun 2026",
    linkedin: "#",
    github: "#",
    email: "mailto:swu245@ucr.edu",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 border-t bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Meet the Team</h2>
          <p className="text-muted-foreground">Standing up for patients — one bill at a time</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {members.map((m) => (
            <div
              key={m.name}
              className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border bg-background shadow-sm w-52"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <p className="font-semibold text-sm leading-tight">{m.name}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">
                  {m.major}
                </p>
                <p className="text-xs text-muted-foreground">
                  {m.school} · {m.grad}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={m.linkedin}
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={m.github}
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={m.email}
                  aria-label="Email"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
