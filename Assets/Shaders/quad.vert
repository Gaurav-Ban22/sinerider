precision mediump float;

attribute vec2 aCoords;
attribute vec2 aTexCoords;

varying vec2 TexCoords;

void main() {
  gl_Position = vec4(aCoords, 0, 1);
  TexCoords = aTexCoords;
}