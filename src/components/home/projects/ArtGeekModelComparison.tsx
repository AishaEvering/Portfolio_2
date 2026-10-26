import styles from "./artGeekModelComparison.module.scss";

const results = [
  {
    label: "Genre classification",
    efficientNet: 57,
    vit: 61,
  },
  {
    label: "Style classification",
    efficientNet: 39,
    vit: 45,
  },
];

export function ArtGeekModelComparison() {
  return (
    <figure className={styles.chart}>
      <div className={styles.eyebrow}>ART GEEK / MODEL EVALUATION</div>

      <h4>Choosing the final architecture</h4>
      <p className={styles.subtitle}>
        Classification accuracy by prediction task
      </p>

      <div className={styles.legend}>
        <span>
          <i className={styles.efficientNetKey} />
          EfficientNet
        </span>
        <span>
          <i className={styles.vitKey} />
          Vision Transformer
        </span>
      </div>

      <div className={styles.results}>
        {results.map((result) => (
          <div className={styles.group} key={result.label}>
            <h5>{result.label}</h5>

            <div className={styles.barRow}>
              <div className={styles.track}>
                <div
                  className={styles.efficientNetBar}
                  style={{ width: `${result.efficientNet}%` }}
                />
              </div>
              <span>{result.efficientNet}%</span>
            </div>

            <div className={styles.barRow}>
              <div className={styles.track}>
                <div
                  className={styles.vitBar}
                  style={{ width: `${result.vit}%` }}
                />
              </div>
              <span>{result.vit}%</span>
            </div>
          </div>
        ))}
      </div>

      <figcaption className={styles.caption}>
        <div className={styles.takeaway}>
          <span className={styles.selected}>ViT selected</span>
          <span>+4 pts genre accuracy · +6 pts style accuracy</span>
        </div>
        <p>
          ViT achieved higher accuracy on both tasks and was selected for the
          deployed Art Geek application.
        </p>
      </figcaption>
    </figure>
  );
}
