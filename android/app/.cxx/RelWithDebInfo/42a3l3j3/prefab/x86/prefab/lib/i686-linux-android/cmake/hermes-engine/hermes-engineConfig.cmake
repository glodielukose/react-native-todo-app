if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/glodielukose/.gradle/caches/8.10.2/transforms/de52f4869a4c69f2349c0e3b023c29ed/transformed/jetified-hermes-android-0.76.2-release/prefab/modules/libhermes/libs/android.x86/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/glodielukose/.gradle/caches/8.10.2/transforms/de52f4869a4c69f2349c0e3b023c29ed/transformed/jetified-hermes-android-0.76.2-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

