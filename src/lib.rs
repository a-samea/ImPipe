//! The library entry point for the Impedance Tube Project.
//!
//! This file exports key modules and provides an initialization function for
//! using the project as a library in other Rust applications. It re-exports
//! each module to allow external access if the crate is used as a library.

/// # Message Structure Sample
/// Somthing usefull
///
/// ## Examples:
/// ```
/// use impedance_tube_project::Message;
/// Message{text:String::from("Something")};
/// ```
///
pub struct Message {
    pub text: String,
}

