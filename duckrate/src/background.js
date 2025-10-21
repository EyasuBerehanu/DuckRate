import { RateMyProfessor } from "rate-my-professor-api-ts";

chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
  if (msg.action === "getProfessorInfo") {
    const rmp = new RateMyProfessor(msg.college, msg.professor);
    const info = await rmp.get_professor_info();
    sendResponse(info);
  }
  return true; // keep the message channel open for async
});
