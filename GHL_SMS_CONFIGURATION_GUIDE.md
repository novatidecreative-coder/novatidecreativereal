# GoHighLevel (GHL) SMS Backend Configuration Guide
## A2P 10DLC Compliance Setup for Novatide Creative

**Phone Number:** +1 917-809-5712  
**Brand:** Novatide Creative  
**Last Updated:** January 13, 2026

---

## Table of Contents
1. [Verify 10DLC Number Registration](#step-1-verify-10dlc-number-in-ghl)
2. [Configure Opt-In Keywords](#step-2-configure-opt-in-keywords)
3. [Configure Opt-In Confirmation](#step-3-configure-opt-in-confirmation-message)
4. [Configure Opt-Out Keywords](#step-4-configure-opt-out-keywords)
5. [Configure Opt-Out Confirmation](#step-5-configure-opt-out-confirmation-message)
6. [Configure Help Keywords](#step-6-configure-help-keywords)
7. [Test SMS Sending](#step-7-test-sms-sending)
8. [Monitor Compliance](#step-8-monitor-opt-out-compliance)

---

## Prerequisites

Before starting, make sure you have:
- ✅ GoHighLevel account with admin access
- ✅ Phone number +1 917-809-5712 registered and active
- ✅ 10DLC Campaign registered and approved
- ✅ Brand verification completed

---

## Step 1: Verify 10DLC Number in GHL

### Navigation Path:
```
Settings (⚙️) → Phone Numbers → +1 917-809-5712
```

### Detailed Steps:

1. **Log into GoHighLevel**
   - Go to https://app.gohighlevel.com
   - Sign in with your account credentials

2. **Access Phone System Settings**
   - Click the **Settings** icon (⚙️) in the left sidebar
   - Select **Phone Numbers** from the menu
   - Or navigate directly to: `Settings → Business → Phone Numbers`

3. **Locate Your Number**
   - Find **+1 917-809-5712** in the list
   - It should display next to your phone number

4. **Verify Registration Status**
   Check that the following indicators are present:
   
   | Indicator | Expected Status |
   |-----------|----------------|
   | **Number Status** | ✅ Active |
   | **10DLC Status** | ✅ Approved / Registered |
   | **Campaign Status** | ✅ Active |
   | **Carrier Approval** | ✅ All Major Carriers |
   | **Daily SMS Limit** | Should show your approved limit |

5. **Screenshot Location for Reference**
   - Take a screenshot showing the number status
   - Note the "Messaging Service SID" (you may need this later)

### Troubleshooting:
- ❌ **If status shows "Pending":** Wait 24-48 hours for carrier approval
- ❌ **If status shows "Rejected":** Contact GHL support immediately
- ❌ **If number is missing:** Check you're in the correct sub-account

---

## Step 2: Configure Opt-In Keywords

Opt-in keywords allow users to subscribe to your SMS program by texting a keyword.

### Keywords to Configure:
- `START`
- `JOIN`
- `OPTIN`
- `YES`
- `UNSTOP` (for re-subscribing after opt-out)

### Navigation Path:
```
Settings → Conversations → Text Message Opt-In/Out
or
Automation → Workflows → Create New Workflow
```

### Detailed Steps:

#### Option A: Using Text Message Opt-In/Out Settings (Recommended)

1. **Navigate to Opt-In Settings**
   ```
   Settings (⚙️) → Conversations → Text Message Opt-In/Out
   ```

2. **Configure Opt-In Keywords**
   - Scroll to "Opt-In Keywords" section
   - Click **+ Add Keyword**
   
3. **Add Each Keyword**
   For each keyword (START, JOIN, OPTIN, YES, UNSTOP):
   
   - **Keyword:** `START` (or other keyword)
   - **Action:** Opt-In Contact
   - **Add to Tag:** `SMS_Opted_In` (optional but recommended)
   - **Send Reply:** ✅ Yes
   - **Reply Message:**
     ```
     Thanks for opting in to Novatide Creative! You'll receive appointment reminders and updates. Msg & data rates apply. Reply HELP for help, STOP to unsubscribe. +1 917-809-5712
     ```
   
4. **Save Each Keyword Configuration**
   - Click **Save**
   - Repeat for all 5 keywords

#### Option B: Using Workflows (Advanced)

1. **Create New Workflow**
   ```
   Automation → Workflows → Create Workflow
   ```

2. **Name the Workflow**
   - Name: "SMS Opt-In Handler"
   - Folder: Communications

3. **Set Trigger**
   - Trigger: **Inbound Message**
   - Filter: Message contains "START" OR "JOIN" OR "OPTIN" OR "YES"
   - Channel: SMS
   - From Number: +1 917-809-5712

4. **Add Actions**
   - Action 1: **Update Contact** → Set DND Status = "Allow SMS"
   - Action 2: **Add Tag** → "SMS_Opted_In"
   - Action 3: **Send SMS**
     ```
     Thanks for opting in to Novatide Creative! You'll receive appointment reminders and updates. Msg & data rates apply. Reply HELP for help, STOP to unsubscribe. +1 917-809-5712
     ```

5. **Publish Workflow**
   - Click **Publish** in the top right

### Testing Opt-In:
1. From your personal phone, text `START` to **+1 917-809-5712**
2. You should receive the opt-in confirmation within 5 seconds
3. Check the contact record in GHL to verify:
   - DND Status = "Allow SMS"
   - Tag "SMS_Opted_In" is applied

---

## Step 3: Configure Opt-In Confirmation Message

The opt-in confirmation must be sent within 24 hours of form submission.

### Confirmation Message Template:
```
Welcome to Novatide Creative! You're opted in for appointment reminders and service updates. Msg & data rates apply. Reply HELP for help, STOP to unsubscribe. +1 917-809-5712
```

### Navigation Path:
```
Automation → Workflows → Create New Workflow
or
Automation → Campaigns → Create Campaign
```

### Detailed Steps:

#### Using Workflows (Recommended):

1. **Create Workflow**
   ```
   Automation → Workflows → Create Workflow
   ```
   - Name: "Form Submission - SMS Opt-In Confirmation"

2. **Set Trigger**
   - Trigger: **Form Submitted**
   - Form: "Request a Demo" (your form name)
   - Filter: Custom Field "SMS Appointments" = "Yes"

3. **Add Wait Step** (Optional but recommended)
   - Wait: 2 minutes
   - This prevents immediate SMS after form submission

4. **Add SMS Action**
   - Action: **Send SMS**
   - From: **+1 917-809-5712**
   - To: {{contact.phone}}
   - Message:
     ```
     Welcome to Novatide Creative! You're opted in for appointment reminders and service updates. Msg & data rates apply. Reply HELP for help, STOP to unsubscribe. +1 917-809-5712
     ```

5. **Add Tag** (For tracking)
   - Action: **Add Tag**
   - Tag: "SMS_Confirmation_Sent"

6. **Publish Workflow**

#### Using Campaigns (Alternative):

1. **Create Campaign**
   ```
   Automation → Campaigns → Create Campaign
   ```
   - Name: "SMS Opt-In Welcome Series"
   - Type: Manual

2. **Add SMS Step**
   - Day 0, Time: Immediately
   - Message: (same as above)

3. **Manually add contacts** to campaign after form submission

### Testing:
1. Submit your demo form at https://novatidecreative.com/book-demo
2. Check "SMS Appointment Reminders & Updates"
3. Submit the form
4. You should receive the welcome message within 2-5 minutes
5. Verify in GHL that the message was sent successfully

---

## Step 4: Configure Opt-Out Keywords

Opt-out keywords are typically automatically configured by GHL, but you should verify them.

### Keywords to Verify:
- `STOP`
- `STOPALL`
- `UNSUBSCRIBE`
- `CANCEL`
- `END`
- `QUIT`

### Navigation Path:
```
Settings → Conversations → Text Message Opt-In/Out
```

### Detailed Steps:

1. **Navigate to Opt-Out Settings**
   ```
   Settings (⚙️) → Conversations → Text Message Opt-In/Out
   ```

2. **Scroll to "Opt-Out Keywords"**
   - GHL automatically configures these
   - Verify all 6 keywords are listed

3. **Check Configuration**
   For each keyword, verify:
   - ✅ **Action:** Opt-Out Contact
   - ✅ **Update DND:** Yes (Stop SMS)
   - ✅ **Send Reply:** Yes
   - ✅ **Reply Message:** (see next step)

4. **Verify Default Opt-Out Behavior**
   - Contact should be marked as "Stop SMS" (DND)
   - Contact should receive confirmation message
   - Contact should NOT receive any further SMS

### Testing Opt-Out:
1. From your test phone, text `STOP` to **+1 917-809-5712**
2. You should receive the opt-out confirmation immediately
3. Check the contact record in GHL:
   - DND Status should now be "Stop SMS"
   - Tag "SMS_Opted_Out" should be applied (if configured)

---

## Step 5: Configure Opt-Out Confirmation Message

### Opt-Out Confirmation Template:
```
You have successfully unsubscribed from Novatide Creative SMS. You will not receive any more messages from this number. Reply START to resubscribe.
```

### Navigation Path:
```
Settings → Conversations → Text Message Opt-In/Out → Opt-Out Confirmation
```

### Detailed Steps:

1. **Navigate to Opt-Out Settings**
   ```
   Settings (⚙️) → Conversations → Text Message Opt-In/Out
   ```

2. **Find "Opt-Out Confirmation Message"**
   - Scroll down to the opt-out section
   - Locate the "Custom Opt-Out Reply" field

3. **Enter Custom Message**
   Replace the default message with:
   ```
   You have successfully unsubscribed from Novatide Creative SMS. You will not receive any more messages from this number. Reply START to resubscribe.
   ```

4. **Configure Additional Settings**
   - ✅ **Send Confirmation:** Enabled
   - ✅ **Immediate Send:** Yes (no delay)
   - ✅ **Apply to All Numbers:** No (only +1 917-809-5712)

5. **Save Configuration**
   - Click **Save Settings**

### Testing:
1. Text `STOP` to **+1 917-809-5712**
2. You should receive your custom confirmation within 5 seconds
3. The message should match your template exactly

---

## Step 6: Configure Help Keywords

Help keywords provide support information to users.

### Keywords to Configure:
- `HELP`
- `SUPPORT`
- `INFO`

### Help Message Template:
```
Novatide Creative Support: Call us at +1 917-809-5712 or email support@novatidecreative.com. Visit https://novatidecreative.com/instructions-for-opt-out for opt-out instructions. Reply STOP to unsubscribe.
```

### Navigation Path:
```
Settings → Conversations → Text Message Opt-In/Out
or
Automation → Workflows
```

### Detailed Steps:

#### Option A: Using Text Message Settings:

1. **Navigate to Opt-In/Out Settings**
   ```
   Settings (⚙️) → Conversations → Text Message Opt-In/Out
   ```

2. **Find "Help Keyword" Section**
   - Scroll to "Help Keywords"
   - Click **+ Add Help Keyword**

3. **Configure Help Keyword**
   - **Keyword:** `HELP`
   - **Send Reply:** ✅ Yes
   - **Reply Message:**
     ```
     Novatide Creative Support: Call us at +1 917-809-5712 or email support@novatidecreative.com. Visit https://novatidecreative.com/instructions-for-opt-out for opt-out instructions. Reply STOP to unsubscribe.
     ```

4. **Repeat for Additional Keywords**
   - Add `SUPPORT` with the same message
   - Add `INFO` with the same message

5. **Save Configuration**

#### Option B: Using Workflows:

1. **Create New Workflow**
   ```
   Automation → Workflows → Create Workflow
   ```
   - Name: "SMS Help Keyword Response"

2. **Set Trigger**
   - Trigger: **Inbound Message**
   - Filter: Message contains "HELP" OR "SUPPORT" OR "INFO"
   - Channel: SMS
   - From Number: +1 917-809-5712

3. **Add SMS Response**
   - Action: **Send SMS**
   - Message: (same as above)

4. **Publish Workflow**

### Testing:
1. Text `HELP` to **+1 917-809-5712**
2. You should receive the support information message
3. Verify all contact details are correct in the message

---

## Step 7: Test SMS Sending

Test your SMS setup to ensure everything works correctly.

### Test Checklist:

#### A. Test Appointment Reminder Message

1. **Create Test Contact**
   ```
   Contacts → Add Contact
   ```
   - Name: Test User
   - Phone: Your personal phone number
   - Tags: "Test Contact"

2. **Send Test Appointment Reminder**
   ```
   Contacts → [Your Test Contact] → Send SMS
   ```
   
   **Sample Message:**
   ```
   Hi {{first_name}}, this is a reminder about your demo call with Novatide Creative tomorrow at 2 PM EST. Reply CONFIRM to confirm or call +1 917-809-5712 to reschedule. Reply STOP to opt out.
   ```

3. **Verify Delivery**
   - Check your phone for the message
   - In GHL, go to: `Contacts → [Test Contact] → Conversations`
   - Status should show "Delivered" with a timestamp

#### B. Test Marketing Message (If Applicable)

1. **Send Test Marketing SMS**
   ```
   Contacts → [Your Test Contact] → Send SMS
   ```
   
   **Sample Message:**
   ```
   Special offer from Novatide Creative! Get 10% off website design this month. Book your free consultation: https://novatidecreative.com/book-demo. Reply STOP to opt out. +1 917-809-5712
   ```

2. **Verify Delivery**
   - Check message received on your phone
   - Verify link works when clicked
   - Check GHL conversation log

#### C. Test Opt-Out Flow

1. **Reply STOP** to any message from +1 917-809-5712
2. **Verify:**
   - Received opt-out confirmation
   - Contact DND status changed to "Stop SMS"
   - Contact record updated in GHL

3. **Try to Send Another Message**
   - Attempt to send SMS to the opted-out contact
   - GHL should block it with error: "Contact has opted out"

#### D. Test Re-Opt-In

1. **Reply START** to +1 917-809-5712
2. **Verify:**
   - Received opt-in confirmation
   - Contact DND status changed to "Allow SMS"
   - Can now receive messages again

### Successful Delivery Indicators:

| Status | What It Means |
|--------|--------------|
| ✅ **Sent** | Message left GHL successfully |
| ✅ **Delivered** | Message reached recipient's phone |
| ⚠️ **Failed** | Message blocked or number invalid |
| ⚠️ **Undelivered** | Carrier issue or phone off |
| ❌ **Opt-Out** | Contact has opted out |

---

## Step 8: Monitor Opt-Out Compliance

Regularly monitor your SMS program for compliance.

### Navigation Path:
```
Reporting → SMS Reports
or
Contacts → Filters → DND Status
```

### Daily Monitoring Tasks:

#### A. Check Opt-Out Rate

1. **Navigate to SMS Reports**
   ```
   Reporting (📊) → SMS → Opt-Out Report
   ```

2. **View Metrics**
   - **Total Opt-Outs:** Should be < 5% monthly
   - **Opt-Out Rate:** Industry standard is 1-3%
   - **Daily Opt-Outs:** Monitor for spikes

3. **Set Up Alerts** (Optional)
   - Go to: `Settings → Notifications`
   - Create alert for: "SMS Opt-Out Rate > 5%"

#### B. Review Message Logs

1. **Access Message Logs**
   ```
   Reporting → SMS → Message Logs
   ```

2. **Filter by Status**
   - Filter: Date = Last 7 days
   - Status: All
   - From: +1 917-809-5712

3. **Check for Issues**
   - ❌ High "Failed" rate (>10%) = investigate
   - ⚠️ "Spam" flags = adjust messaging
   - ✅ "Delivered" rate should be >95%

#### C. Verify Opt-Out Processing

1. **Check DND List**
   ```
   Contacts → Filters → DND Status = "Stop SMS"
   ```

2. **Weekly Verification**
   - Export opted-out contacts
   - Verify they're not receiving messages
   - Cross-reference with unsubscribe requests

3. **Audit Workflow**
   - Every 2 weeks, manually test opt-out
   - Verify confirmation message sent
   - Verify no further messages received

### Compliance Dashboard (Create Custom View):

1. **Navigate to Dashboards**
   ```
   Reporting → Dashboards → Create Custom Dashboard
   ```

2. **Add Widgets:**
   - **SMS Sent (Last 30 Days)**
   - **SMS Opt-Out Rate**
   - **SMS Delivery Rate**
   - **Failed Messages**
   - **TCPA Compliance Score** (if available)

3. **Set Alerts:**
   - Opt-out rate > 5%
   - Delivery rate < 90%
   - Failed messages > 50/day

### Monthly Compliance Checklist:

- [ ] Review opt-out rate (should be < 5%)
- [ ] Verify all STOP keywords working
- [ ] Test HELP keyword response
- [ ] Audit message logs for spam flags
- [ ] Verify opt-out confirmations sent
- [ ] Check for reassigned number complaints
- [ ] Review and update messaging templates
- [ ] Verify 10DLC registration still active
- [ ] Document any compliance issues

---

## Troubleshooting Common Issues

### Issue 1: Messages Not Sending

**Symptoms:**
- SMS shows "Failed" status
- No error message provided

**Solutions:**
1. Check 10DLC registration status
2. Verify contact has valid phone number (E.164 format)
3. Check contact DND status (should be "Allow SMS")
4. Verify daily SMS limit not exceeded
5. Check carrier filtering/blocking

### Issue 2: Opt-Out Not Working

**Symptoms:**
- User texts STOP but still receives messages
- No opt-out confirmation sent

**Solutions:**
1. Verify opt-out keywords configured correctly
2. Check workflow/automation conflicts
3. Test with different phone number
4. Check for workflow overrides
5. Review conversation log for errors

### Issue 3: High Opt-Out Rate

**Symptoms:**
- Opt-out rate > 5%
- Multiple opt-outs per day

**Solutions:**
1. Review message content (too frequent/aggressive?)
2. Verify targeting (sending to right audience?)
3. Check message timing (respecting time zones?)
4. Review opt-in process (clear expectations set?)
5. Survey opted-out contacts for feedback

### Issue 4: Delivery Rate Low

**Symptoms:**
- Delivered rate < 90%
- Many "Undelivered" statuses

**Solutions:**
1. Verify phone numbers are valid (use validation tool)
2. Check for carrier filtering
3. Review message content for spam triggers
4. Verify 10DLC campaign approved
5. Test with different carriers

### Issue 5: Spam Flags

**Symptoms:**
- Messages marked as spam by carriers
- Delivery rate declining over time

**Solutions:**
1. Reduce message frequency
2. Avoid spam trigger words (FREE, WIN, URGENT)
3. Always include opt-out instructions
4. Verify sender ID matches registration
5. Review message templates for compliance

---

## Best Practices for A2P 10DLC

### DO's:
✅ Always include opt-out instructions  
✅ Send messages only during business hours (8 AM - 9 PM)  
✅ Respect user preferences (appointment vs marketing)  
✅ Monitor opt-out rates regularly  
✅ Process opt-outs within 24 hours  
✅ Keep messages concise and relevant  
✅ Include company name in messages  
✅ Provide clear opt-in consent  
✅ Test thoroughly before launching  
✅ Document all compliance procedures  

### DON'Ts:
❌ Don't send without explicit consent  
❌ Don't ignore opt-out requests  
❌ Don't send promotional messages to appointment-only contacts  
❌ Don't use misleading content  
❌ Don't exceed message frequency limits  
❌ Don't send late at night/early morning  
❌ Don't buy phone lists  
❌ Don't share user data without permission  
❌ Don't use multiple numbers without registration  
❌ Don't make opt-out difficult  

---

## Support & Resources

### GoHighLevel Support:
- **Help Center:** https://help.gohighlevel.com
- **Support Email:** support@gohighlevel.com
- **Phone:** Available in your account dashboard
- **Community:** https://community.gohighlevel.com

### Carrier Information:
- **AT&T:** https://www.att.com/business-messaging
- **T-Mobile:** https://www.t-mobile.com/business/solutions/a2p-messaging
- **Verizon:** https://www.verizon.com/business/products/messaging/

### Compliance Resources:
- **TCPA Compliance:** https://www.fcc.gov/general/telemarketing-and-robocalls
- **CTIA Guidelines:** https://www.ctia.org/the-wireless-industry/industry-commitments/messaging-principles-and-best-practices
- **10DLC Information:** https://www.campaignregistry.com

### Novatide Creative:
- **Website:** https://novatidecreative.com
- **Support Email:** support@novatidecreative.com
- **Phone:** +1 917-809-5712
- **Opt-Out Instructions:** https://novatidecreative.com/instructions-for-opt-out

---

## Appendix: Quick Reference

### Important Numbers:
- **SMS Number:** +1 917-809-5712
- **Support:** support@novatidecreative.com

### Keywords:
- **Opt-In:** START, JOIN, OPTIN, YES, UNSTOP
- **Opt-Out:** STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT
- **Help:** HELP, SUPPORT, INFO

### Links:
- **Demo Form:** https://novatidecreative.com/book-demo
- **Privacy Policy:** https://novatidecreative.com/privacy-policy
- **Terms:** https://novatidecreative.com/terms-and-conditions
- **Opt-Out Instructions:** https://novatidecreative.com/instructions-for-opt-out

---

## Document Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 13, 2026 | Initial A2P 10DLC compliant guide created |

---

**Document prepared for:** Novatide Creative  
**Phone Number:** +1 917-809-5712  
**Compliance Standard:** A2P 10DLC, TCPA, CTIA  

For questions or updates to this guide, contact: support@novatidecreative.com
