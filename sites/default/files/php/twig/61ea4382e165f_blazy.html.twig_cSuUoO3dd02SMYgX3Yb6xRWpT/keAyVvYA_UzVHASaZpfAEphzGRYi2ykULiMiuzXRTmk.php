<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* modules/contrib/blazy/templates/blazy.html.twig */
class __TwigTemplate_bd956c44fae89c84d7e97654377b9b07b455380f9843e2905a1eb27af07850e1 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'blazy_player' => [$this, 'block_blazy_player'],
            'blazy_media' => [$this, 'block_blazy_media'],
            'blazy_content' => [$this, 'block_blazy_content'],
            'blazy_caption' => [$this, 'block_blazy_caption'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 55, "if" => 69, "block" => 97, "for" => 146];
        $filters = ["clean_class" => 57, "join" => 65, "t" => 72, "escape" => 155];
        $functions = ["create_attribute" => 79];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block', 'for'],
                ['clean_class', 'join', 't', 'escape'],
                ['create_attribute']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 55
        $context["classes"] = [0 => ((        // line 56
($context["content"] ?? null)) ? ("media--rendered") : ("")), 1 => (($this->getAttribute(        // line 57
($context["settings"] ?? null), "bundle", [])) ? (("media--bundle--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "bundle", []))))) : ("")), 2 => (($this->getAttribute(        // line 58
($context["settings"] ?? null), "namespace", [])) ? (("media--" . $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "namespace", [])))) : ("")), 3 => ((($this->getAttribute(        // line 59
($context["settings"] ?? null), "lazy", []) && $this->getAttribute(($context["settings"] ?? null), "use_loading", []))) ? ("media--loading is-b-loading") : ("")), 4 => (($this->getAttribute(        // line 60
($context["settings"] ?? null), "media_switch", [])) ? (("media--switch media--switch--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "media_switch", []))))) : ("")), 5 => (($this->getAttribute(        // line 61
($context["settings"] ?? null), "player", [])) ? ("media--player") : ("")), 6 => (($this->getAttribute(        // line 62
($context["settings"] ?? null), "ratio", [])) ? (("media--ratio media--ratio--" . $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "ratio", [])))) : ("")), 7 => (($this->getAttribute(        // line 63
($context["settings"] ?? null), "responsive_image_style_id", [])) ? ("media--responsive") : ("")), 8 => (($this->getAttribute(        // line 64
($context["settings"] ?? null), "type", [])) ? (("media--" . $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "type", [])))) : ("")), 9 => (($this->getAttribute(        // line 65
($context["settings"] ?? null), "classes", [])) ? (\Drupal\Component\Utility\Html::getClass(twig_join_filter($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "classes", [])), " "))) : (""))];
        // line 68
        echo "
";
        // line 69
        if ($this->getAttribute(($context["settings"] ?? null), "player", [])) {
            // line 70
            echo "  ";
            $context["attributes"] = $this->getAttribute(($context["attributes"] ?? null), "setAttribute", [0 => "aria-live", 1 => "polite"], "method");
            // line 71
            echo "
  ";
            // line 72
            $context["play_title"] = t("Load and play video.");
            // line 73
            echo "  ";
            $context["close_title"] = t("Stop and close video.");
            // line 74
            echo "  ";
            if ($this->getAttribute(($context["settings"] ?? null), "accessible_title", [])) {
                // line 75
                echo "    ";
                $context["play_title"] = t("Load and play the video \"@label\".", ["@label" => $this->getAttribute(($context["settings"] ?? null), "accessible_title", [])]);
                // line 76
                echo "    ";
                $context["close_title"] = t("Stop and close the video \"@label\".", ["@label" => $this->getAttribute(($context["settings"] ?? null), "accessible_title", [])]);
                // line 77
                echo "  ";
            }
            // line 78
            echo "
  ";
            // line 79
            $context["play_button_attributes"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->createAttribute(["aria-label" =>             // line 80
($context["play_title"] ?? null), "class" => [0 => "media__icon", 1 => "media__icon--play"], "data-url" => $this->getAttribute(            // line 82
($context["settings"] ?? null), "embed_url", []), "data-iframe-title" => $this->getAttribute(            // line 83
($context["settings"] ?? null), "accessible_title", []), "title" =>             // line 84
($context["play_title"] ?? null), "type" => "button"]);
            // line 87
            echo "
  ";
            // line 88
            $context["close_button_attributes"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->createAttribute(["aria-label" =>             // line 89
($context["close_title"] ?? null), "class" => [0 => "media__icon", 1 => "media__icon--close"], "title" =>             // line 91
($context["close_title"] ?? null), "type" => "button"]);
        }
        // line 95
        echo "
";
        // line 96
        ob_start(function () { return ''; });
        // line 97
        echo "  ";
        $this->displayBlock('blazy_player', $context, $blocks);
        $context["player"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 106
        echo "
";
        // line 107
        ob_start(function () { return ''; });
        // line 108
        echo "  ";
        $this->displayBlock('blazy_media', $context, $blocks);
        $context["media"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 123
        echo "
";
        // line 124
        ob_start(function () { return ''; });
        // line 125
        echo "  ";
        $this->displayBlock('blazy_content', $context, $blocks);
        // line 142
        echo "
  ";
        // line 143
        if ((($context["captions"] ?? null) && $this->getAttribute(($context["captions"] ?? null), "inline", [], "any", true, true))) {
            // line 144
            echo "    ";
            $this->displayBlock('blazy_caption', $context, $blocks);
            // line 153
            echo "  ";
        }
        // line 155
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["postscript"] ?? null)), "html", null, true);
        $context["blazy"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 158
        echo "
";
        // line 159
        if (($context["wrapper_attributes"] ?? null)) {
            // line 160
            echo "  <div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["wrapper_attributes"] ?? null)), "html", null, true);
            echo ">";
            // line 161
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["blazy"] ?? null)), "html", null, true);
            // line 162
            echo "</div>
";
        } else {
            // line 164
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["blazy"] ?? null)), "html", null, true);
            echo "
";
        }
    }

    // line 97
    public function block_blazy_player($context, array $blocks = [])
    {
        // line 98
        echo "    ";
        if ($this->getAttribute(($context["settings"] ?? null), "player", [])) {
            // line 99
            echo "      <button";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["close_button_attributes"] ?? null)), "html", null, true);
            echo "></button>
      <button";
            // line 100
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["play_button_attributes"] ?? null)), "html", null, true);
            echo "></button>
    ";
        } else {
            // line 102
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["iframe"] ?? null)), "html", null, true);
        }
        // line 104
        echo "  ";
    }

    // line 108
    public function block_blazy_media($context, array $blocks = [])
    {
        // line 109
        echo "    <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">";
        // line 110
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["preface"] ?? null)), "html", null, true);
        // line 111
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["noscript"] ?? null)), "html", null, true);
        // line 112
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        // line 113
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["image"] ?? null)), "html", null, true);
        // line 114
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["overlay"] ?? null)), "html", null, true);
        // line 115
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["player"] ?? null)), "html", null, true);
        // line 118
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["settings"] ?? null), "icon", [])), "html", null, true);
        // line 119
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["icon"] ?? null)), "html", null, true);
        // line 120
        echo "</div>
  ";
    }

    // line 125
    public function block_blazy_content($context, array $blocks = [])
    {
        // line 126
        echo "    ";
        if (($context["media_attributes"] ?? null)) {
            echo "<div";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media_attributes"] ?? null)), "html", null, true);
            echo ">";
        }
        // line 127
        echo "      ";
        if ((($context["url"] ?? null) &&  !$this->getAttribute(($context["settings"] ?? null), "player", []))) {
            // line 128
            echo "        <a href=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
            echo "\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url_attributes"] ?? null)), "html", null, true);
            echo ">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media"] ?? null)), "html", null, true);
            echo "</a>

        ";
            // line 131
            echo "        ";
            if ((($context["captions"] ?? null) &&  !twig_test_empty($this->getAttribute(($context["captions"] ?? null), "lightbox", [])))) {
                // line 132
                echo "          <div class=\"litebox-caption visually-hidden\">";
                // line 133
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["captions"] ?? null), "lightbox", [])), "html", null, true);
                // line 134
                echo "</div>
        ";
            }
            // line 136
            echo "
      ";
        } else {
            // line 138
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["media"] ?? null)), "html", null, true);
        }
        // line 140
        echo "    ";
        if (($context["media_attributes"] ?? null)) {
            echo "</div>";
        }
        // line 141
        echo "  ";
    }

    // line 144
    public function block_blazy_caption($context, array $blocks = [])
    {
        // line 145
        echo "      <div";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption_attributes"] ?? null)), "html", null, true);
        echo ">
        ";
        // line 146
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["captions"] ?? null), "inline", []));
        foreach ($context['_seq'] as $context["_key"] => $context["caption"]) {
            // line 147
            echo "          ";
            if ($this->getAttribute($context["caption"], "content", [])) {
                // line 148
                echo "            <";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "tag", [])), "html", null, true);
                echo " ";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "attributes", [])), "html", null, true);
                echo ">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "content", [])), "html", null, true);
                echo "</";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["caption"], "tag", [])), "html", null, true);
                echo ">
          ";
            }
            // line 150
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['caption'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 151
        echo "      </div>
    ";
    }

    public function getTemplateName()
    {
        return "modules/contrib/blazy/templates/blazy.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  312 => 151,  306 => 150,  294 => 148,  291 => 147,  287 => 146,  282 => 145,  279 => 144,  275 => 141,  270 => 140,  267 => 138,  263 => 136,  259 => 134,  257 => 133,  255 => 132,  252 => 131,  242 => 128,  239 => 127,  232 => 126,  229 => 125,  224 => 120,  222 => 119,  220 => 118,  218 => 115,  216 => 114,  214 => 113,  212 => 112,  210 => 111,  208 => 110,  204 => 109,  201 => 108,  197 => 104,  194 => 102,  189 => 100,  184 => 99,  181 => 98,  178 => 97,  171 => 164,  167 => 162,  165 => 161,  161 => 160,  159 => 159,  156 => 158,  153 => 155,  150 => 153,  147 => 144,  145 => 143,  142 => 142,  139 => 125,  137 => 124,  134 => 123,  130 => 108,  128 => 107,  125 => 106,  121 => 97,  119 => 96,  116 => 95,  113 => 91,  112 => 89,  111 => 88,  108 => 87,  106 => 84,  105 => 83,  104 => 82,  103 => 80,  102 => 79,  99 => 78,  96 => 77,  93 => 76,  90 => 75,  87 => 74,  84 => 73,  82 => 72,  79 => 71,  76 => 70,  74 => 69,  71 => 68,  69 => 65,  68 => 64,  67 => 63,  66 => 62,  65 => 61,  64 => 60,  63 => 59,  62 => 58,  61 => 57,  60 => 56,  59 => 55,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/contrib/blazy/templates/blazy.html.twig", "/app/modules/contrib/blazy/templates/blazy.html.twig");
    }
}
