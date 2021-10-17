$icons: 'one', 'two', 'three', 'four';


@mixin generateIcons($iconList) {
    @each $iconName in $iconList {
        .features__title-#{$iconName}::before {
        background-image: url('/svg-2/#{$iconName}.svg');
    }
  }
}

@include generateIcons($icons);