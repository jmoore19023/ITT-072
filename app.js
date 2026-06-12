const state = {
  habits: [
    { id: 1, name: "Drink water wiith each meal", category: "health",   done: false },
    { id: 2, name: "Study/Read for 20 minutes", category: "personal", done: false },
    { id: 3, name: "Check/Complete assignemnts", category: "school",   done: false },
    { id: 4, name: "Audit report pipelines are functioning", category: "work",   done: false },
    { id: 5, name: "Read book with kids",category: "personal",   done: false }
  ],
  notes:        [],
  filter:       "all",
  nextId:       4,
  confirmHabit: null,
  confirmNote:  null,
  confirmReset: false
};

function render() {
  renderStats();
  renderFilters();
  renderHabits();
  renderNotes();
  renderReset();
}

function renderStats() {
  var total = state.habits.length;
  var done  = state.habits.filter(function(h) { return h.done; }).length;
  var pct   = total ? Math.round((done / total) * 100) : 0;

  document.getElementById("stats-grid").innerHTML =
    '<div class="stat-card"><div class="stat-label">Total Habits</div><div class="stat-value">' + total + '</div></div>' +
    '<div class="stat-card"><div class="stat-label">Completed</div><div class="stat-value">' + done + '</div><div class="bar-bg"><div class="bar-fill" style="width:' + pct + '%"></div></div></div>' +
    '<div class="stat-card"><div class="stat-label">Progress</div><div class="stat-value">' + pct + '%</div><div class="stat-sub">' + (total - done) + ' remaining</div></div>' +
    '<div class="stat-card"><div class="stat-label">Notes Saved</div><div class="stat-value">' + state.notes.length + '</div></div>';
}

function renderFilters() {
  var cats = ["all", "health", "personal", "work", "school","other"];
  var html = "";
  for (var i = 0; i < cats.length; i++) {
    var c = cats[i];
    var label = c === "all" ? "All" : cap(c);
    var activeClass = state.filter === c ? " active" : "";
    html += '<button class="pill' + activeClass + '" onclick="setFilter(\'' + c + '\')">' + label + '</button>';
  }
  document.getElementById("filter-row").innerHTML = html;
}

function renderHabits() {
  var list = [];
  for (var i = 0; i < state.habits.length; i++) {
    if (state.filter === "all" || state.habits[i].category === state.filter) {
      list.push(state.habits[i]);
    }
  }

  var el = document.getElementById("habits-list");
  if (list.length === 0) {
    el.innerHTML = '<div class="empty">No habits here yet.</div>';
    return;
  }

  var html = "";
  for (var j = 0; j < list.length; j++) {
    var h = list[j];
    var doneClass  = h.done ? " done" : "";
    var checkClass = h.done ? " done" : "";
    var checkMark  = h.done ? "&#10003;" : "";
    var ariaLabel  = h.done ? "Mark incomplete" : "Mark complete";
    var actionHtml;

    if (state.confirmHabit === h.id) {
      actionHtml =
        '<div class="confirm-inline">Remove? ' +
          '<button class="btn-yes" onclick="deleteHabit(' + h.id + ')">Yes</button>' +
          '<button class="btn-no" onclick="cancelConfirm()">No</button>' +
        '</div>';
    } else {
      actionHtml = '<button class="icon-btn" onclick="askConfirmHabit(' + h.id + ')" aria-label="Delete habit">&#128465;</button>';
    }

    html +=
      '<div class="habit-row' + doneClass + '">' +
        '<button class="check' + checkClass + '" onclick="toggleHabit(' + h.id + ')" aria-label="' + ariaLabel + '">' + checkMark + '</button>' +
        '<span class="hname">' + esc(h.name) + '</span>' +
        '<span class="tag ' + h.category + '">' + cap(h.category) + '</span>' +
        actionHtml +
      '</div>';
  }
  el.innerHTML = html;
}

function renderNotes() {
  var el = document.getElementById("notes-list");
  if (state.notes.length === 0) {
    el.innerHTML = '<div class="empty">No notes yet.</div>';
    return;
  }

  var html = "";
  for (var i = 0; i < state.notes.length; i++) {
    var n = state.notes[i];
    var actionHtml;

    if (state.confirmNote === i) {
      actionHtml =
        '<div class="confirm-inline">Remove? ' +
          '<button class="btn-yes" onclick="deleteNote(' + i + ')">Yes</button>' +
          '<button class="btn-no" onclick="cancelConfirm()">No</button>' +
        '</div>';
    } else {
      actionHtml = '<button class="icon-btn" onclick="askConfirmNote(' + i + ')" aria-label="Delete note">&#128465;</button>';
    }

    html +=
      '<div class="note-item">' +
        '<div style="flex:1"><div class="note-body">' + esc(n.text) + '</div><div class="note-meta">' + n.time + '</div></div>' +
        actionHtml +
      '</div>';
  }
  el.innerHTML = html;
}

function renderReset() {
  var el = document.getElementById("reset-row");
  if (state.habits.length === 0) { el.innerHTML = ""; return; }

  if (state.confirmReset) {
    el.innerHTML =
      '<div class="confirm-inline">Clear all checkmarks? ' +
        '<button class="btn-yes" onclick="resetDay()">Yes</button>' +
        '<button class="btn-no" onclick="cancelConfirm()">No</button>' +
      '</div>';
  } else {
    el.innerHTML = '<button class="reset-btn" onclick="askConfirmReset()">&#8635; Reset day</button>';
  }
}

function addHabit() {
  var input = document.getElementById("habit-input");
  var cat   = document.getElementById("habit-cat").value;
  var name  = input.value.trim();
  var err   = document.getElementById("habit-err");

  if (name === "") { err.textContent = "Please enter a habit name."; return; }

  for (var i = 0; i < state.habits.length; i++) {
    if (state.habits[i].name.toLowerCase() === name.toLowerCase()) {
      err.textContent = "That habit already exists.";
      return;
    }
  }

  err.textContent = "";
  state.habits.push({ id: state.nextId, name: name, category: cat, done: false });
  state.nextId = state.nextId + 1;
  input.value = "";
  render();
}

function toggleHabit(id) {
  for (var i = 0; i < state.habits.length; i++) {
    if (state.habits[i].id === id) {
      state.habits[i].done = !state.habits[i].done;
    }
  }
  render();
}

function askConfirmHabit(id) { state.confirmHabit = id; state.confirmNote = null; state.confirmReset = false; render(); }
function deleteHabit(id) {
  var updated = [];
  for (var i = 0; i < state.habits.length; i++) {
    if (state.habits[i].id !== id) { updated.push(state.habits[i]); }
  }
  state.habits = updated;
  state.confirmHabit = null;
  render();
}

function askConfirmNote(i) { state.confirmNote = i; state.confirmHabit = null; state.confirmReset = false; render(); }
function deleteNote(i) { state.notes.splice(i, 1); state.confirmNote = null; render(); }

function askConfirmReset() { state.confirmReset = true; state.confirmHabit = null; state.confirmNote = null; render(); }
function resetDay() {
  for (var i = 0; i < state.habits.length; i++) { state.habits[i].done = false; }
  state.confirmReset = false;
  render();
}

function cancelConfirm() { state.confirmHabit = null; state.confirmNote = null; state.confirmReset = false; render(); }
function setFilter(cat) { state.filter = cat; render(); }

function addNote() {
  var input = document.getElementById("note-input");
  var text  = input.value.trim();
  var err   = document.getElementById("note-err");

  if (text === "") { err.textContent = "Please write something before saving."; return; }

  err.textContent = "";
  var time = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
  state.notes.unshift({ text: text, time: time });
  input.value = "";
  render();
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

document.getElementById("date-chip").textContent = new Date().toLocaleDateString("en-US", {
  weekday: "short", month: "short", day: "numeric"
});

render();