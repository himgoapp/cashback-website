# TODO: Transform Poker/Casino Platform to Clean E-commerce

## Analysis Summary:
- Current colors are already mostly aligned with requirements:
  - Primary Blue: #0052CC ✓
  - Highlight color now uses navbar blue #1A73E8 ✓
  - Background: #FFFFFF ✓
- Font: Sora/Inter already set ✓
- Cards have clean design already ✓

## Tasks:

### 1. Update Slidernew.jsx - Replace Poker content with Shopping deals
- [ ] Replace poker titles like "Pokebazzi" with generic shopping store names
- [ ] Update descriptions from betting language to shopping language
- [ ] Change "Bet $1+" to shopping offers

### 2. Update TopOffers Component Styling
- [ ] Clean up card headers (already clean - uses gradient background)
- [ ] Ensure border-radius is 8-12px (already done)
- [ ] Update button styles to "Grab Deal"

### 3. Update Deal Card Component
- [ ] Ensure "Learn More" is used (already done)

### 4. Review and update any remaining poker references
- [ ] Check for any "Play Now", "Join Table" buttons
- [ ] Replace with "Grab Deal" or "Shop Now"

### 5. Icon Updates
- [ ] Verify shopping icons are used (Tag, ShoppingBag, etc.)

## Files to Edit:
1. src/components/home/offers/Slidernew.jsx
2. src/components/home/offers/topOffers.module.css
3. src/components/home/deals/deal_card.jsx
4. src/components/offerAndDeal/cards/card.jsx (already has Grab Deal)
