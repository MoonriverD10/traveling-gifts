# Who Has It – Full Content Spec

## Button 2: Who Has It

### Purpose
This button tracks **where your puzzle is right now** in its journey from sender to recipient. It's a gift tracking + storytelling feature that keeps givers and receivers connected throughout the puzzle experience.

### Core Concept
When someone purchases a Traveling Gifts puzzle as a gift, they can:
1. Register the puzzle in the system
2. Track when it ships, arrives, and gets completed
3. See updates from the recipient (optional photo uploads, completion status)
4. Get notified when the recipient shares their story
5. Stay connected to the gift experience without being intrusive

---

## Hero Section

**Headline**: *"Track Your Gift's Journey"*

**Subheadline**: *"See where your puzzle is and celebrate when it arrives"*

**Visual**: Animated tracking timeline or map-style progress indicator showing the journey from sender to recipient

---

## Section 1 – The Journey Stages

**Visual Timeline** showing progressive stages:

1. **📦 Ordered**  
   - Status: "Your puzzle is being prepared"  
   - Details: Order date, estimated ship date
   
2. **🚚 In Transit**  
   - Status: "On its way to [Recipient Name]"  
   - Details: Tracking number, carrier, estimated delivery
   
3. **📬 Delivered**  
   - Status: "Arrived! Waiting to be opened"  
   - Details: Delivery date, time, location confirmation
   
4. **🧩 In Progress**  
   - Status: "They've started puzzling!"  
   - Details: Date started, optional progress photo from recipient
   
5. **✨ Completed**  
   - Status: "Finished! See their story"  
   - Details: Completion date, link to their story in Completion Pictures

**Each stage can display**:
- Date/time stamps
- Optional message from sender or recipient
- Photos if uploaded (unboxing, work-in-progress, finished puzzle)
- Status updates ("Sarah marked this as 'Started' 2 hours ago")

---

## Section 2 – Why It Matters

**Headline**: *"More Than Just a Box"*

Gifting a puzzle isn't just sending a box—it's sharing an experience. With "Who Has It," you can stay connected to that experience without being intrusive. Watch as your gift arrives, see the moment they dive in, and celebrate when they complete it. It's the digital version of being there when they open the gift.

**Key Benefits**:
- **Stay connected** without constantly texting "Did it arrive yet?"
- **Share the excitement** of each milestone
- **See their progress** through optional photo updates
- **Celebrate completion** together, even from far away

**Pull-quote**: *"The best gifts aren't just given—they're experienced together, even from far away."*

---

## Section 3 – For Senders

**Headline**: *"Track the Gifts You've Sent"*

**Features**:
- **Dashboard view** showing all puzzles you've sent
- **Status at a glance**: See which gifts are in transit, delivered, or completed
- **Recipient list**: Name, park/puzzle sent, current status
- **Detailed timeline**: Tap any gift to see full journey
- **Notifications**: Get alerts when status changes (delivered, started, completed)
- **Personal messages**: Add a note that appears when the recipient opens the app

**Example View**:
```
Your Sent Puzzles

✅ Grand Canyon → Mom & Dad | Completed Dec 20
📦 Yellowstone → Sarah | In Transit (arrives Dec 31)
✨ Yosemite → Alex | Started Dec 15
```

---

## Section 4 – For Recipients

**Headline**: *"Someone Sent You a Puzzle!"*

**Features**:
- **Incoming gifts view** showing puzzles on their way to you
- **Sender information**: See who sent it and read their message
- **Update your progress**: Mark as "Started" or "Completed"
- **Share moments**: Upload photos at any stage (optional)
- **Thank the sender**: Send a quick message or share your story when done
- **Privacy controls**: Choose what you share back with sender

**Example View**:
```
From: Sarah
Puzzle: Rocky Mountain National Park
Message: "Thought of you when I saw this! Can't wait to hear about your adventure."

Status: Delivered Dec 28
[Mark as Started] [Upload Photo]
```

---

## UX Flow

### For Senders:
1. **Tap "Who Has It"** → Dashboard shows all sent puzzles
2. **View at a glance**: Status list with icons and names
3. **Tap specific gift** → Detailed timeline with all stages
4. **Receive notifications**: When status changes (delivered, started, completed)
5. **View recipient updates**: See photos and messages they've shared

### For Recipients:
1. **Tap "Who Has It"** → See incoming or received puzzles
2. **Read sender message**: Personal note from gift-giver
3. **Update status**: Mark when you start or complete
4. **Upload photos** (optional): Share progress with sender
5. **Complete and share story**: Link to Completion Pictures upload

---

## Technical Features

### Tracking Integration
- **Shipping API integration** (USPS, UPS, FedEx) for real-time tracking
- **Manual status override** if tracking isn't available
- **Email/SMS notifications** for major milestones
- **Push notifications** in-app for status changes

### Privacy & Permissions
- **Sender permissions**: Can see delivery status and recipient's opt-in updates
- **Recipient permissions**: Controls what they share (photos, messages, completion status)
- **Default privacy**: Only basic delivery confirmation shared unless recipient opts in

### Photo Uploads
- **Optional at every stage**: Unboxing, setup, progress, completion
- **Compression for mobile**: Optimize images automatically
- **Direct share to sender**: Photos go to sender's view immediately

---

## Design Notes

### Visual Style
- **Progress timeline**: Horizontal scroll on mobile, vertical on desktop
- **Stage icons**: Clear emoji or custom icons for each phase
- **Status indicators**: Green checkmark (done), orange pulse (in progress), gray (pending)
- **Photo thumbnails**: Small previews that expand on tap

### Tone
- Warm, celebratory, non-intrusive
- Emphasize connection without pressure
- Respect recipient privacy while enabling sharing

---

## Connection to Other Buttons

- **Button 1 (Featured Puzzle)**: Introduces the gift-giving concept
- **Button 2 (Who Has It)**: **Tracks the journey** from order to completion
- **Button 3 (Completion Pictures)**: Where completed puzzle stories live permanently
- **Button 4 (The Map)**: Shows geographic distribution of where puzzles are

**Story Flow**:
- Button 2 tracks the **journey in real-time**
- Button 3 showcases the **final celebration and story**
- Stories from Button 2 graduates to Button 3 when marked "Completed"

---

## Implementation Checklist

- [ ] Create sender dashboard showing all sent puzzles
- [ ] Create recipient view for incoming/received puzzles
- [ ] Build timeline UI with 5 progressive stages
- [ ] Integrate shipping API for real-time tracking
- [ ] Add manual status update controls for recipients
- [ ] Build photo upload feature with compression
- [ ] Implement push notification system for status changes
- [ ] Add privacy controls for recipients
- [ ] Create messaging system for sender-recipient communication
- [ ] Link "Completed" status to Completion Pictures upload flow
- [ ] Test on mobile and desktop
- [ ] Add analytics for tracking engagement

---

## Edge Cases & Considerations

**Multiple Recipients**: If one sender gifts to multiple people, show list view with all statuses

**Gift to Self**: If user buys for themselves, simplified view without sender/recipient split

**Lost or Delayed Shipments**: Show tracking issues clearly, offer support contact

**Never Marked Complete**: After 90 days of "Delivered" status, gentle prompt to update or archive

**Privacy Concerns**: Recipients can disable all sharing and just track privately

---

## Future Enhancements

- **Group gifting**: Multiple people chip in for one puzzle, all can track
- **Video messages**: Record short video to accompany gift
- **Puzzle registry**: Like a wedding registry, for birthdays or holidays
- **Completion reminders**: Gentle nudges if puzzle sits incomplete for weeks (opt-in)
- **Social sharing**: Share tracking page link with others ("Watch my progress!")

---

## Notes

- This feature bridges the gap between giving and experiencing
- Keeps the human connection alive throughout the puzzle journey
- Respects privacy while enabling meaningful sharing
- Natural funnel from "Who Has It" to "Completion Pictures" when puzzle is done