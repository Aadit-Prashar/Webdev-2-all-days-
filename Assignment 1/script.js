const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvent = [
  {
    title: "Web dev",
    date: "4-12-2026",
    category: "workshop",
    description: "Java script Task",
  },
  {
    title: "Web dev2",
    date: "5-12-2026",
    category: "conference",
    description: "Assignment Task",
  },
];

//   create event card
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.innerHTML = `
    <button class=delete-btn>X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>${eventData.description}</p>
    `;

    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
    card.remove();

    // show empty message again if no events left
    if (eventContainer.children.length === 0) {
      eventContainer.innerHTML = `
        <div class="empty-state">
          No events yet. Add your first event!
        </div>
      `;
    }
  });

    
  return card;
}

addSampleBtn.addEventListener("click", () => {
  sampleEvent.forEach(event => addEvent(event));
})

function addEvent(eventData) {
  const emptyState = document.querySelector(".empty-state");
  if (emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));
}
clearAllBtn.addEventListener("click", () => {
  eventContainer.innerHTML = `
    <div class="empty-state">
      No events yet. Add your first event!
    </div>
  `;
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: eventCategory.value,
    description: eventDescription.value,
  };

  addEvent(eventData);
  eventForm.reset();
});